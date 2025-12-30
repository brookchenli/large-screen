export function captureFirstFrame(videoUrl: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video");

    video.src = videoUrl;
    video.crossOrigin = "anonymous";
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";

    // 1️⃣ 元数据加载完成（拿到宽高）
    video.addEventListener("loadedmetadata", () => {
      // ⚠️ 强制 seek 到第 0 帧
      video.currentTime = 0;
    });

    // 2️⃣ seek 完成，画面真正 ready
    video.addEventListener("seeked", () => {
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const ctx = canvas.getContext("2d");
      if (!ctx) return reject("Canvas not supported");

      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      try {
        const dataUrl = canvas.toDataURL("image/png");
        resolve(dataUrl);
      } catch (err) {
        reject("Canvas is tainted (CORS issue)");
      }
    });

    video.addEventListener("error", () => {
      reject("Video load error");
    });
  });
}
