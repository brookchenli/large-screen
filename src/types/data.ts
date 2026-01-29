export interface SummaryData {
    left_side: {
        row1: {
            col1: {
                data: {
                    label: string;
                    value: number;
                    total: number;
                    color: string;
                }[];
            };
            col2: {
                data: {
                    label: string;
                    value: number;
                }[];
            };
        };
        row2: {
            col1: {
                data: {
                    label: string;
                    value1: number;
                    value2: number;
                    total: number;
                    index: string;
                }[];
            };
            col2: {
                data: {
                    label: string;
                    value: number;
                    total: number;
                    index: string;
                }[];
            };
        };
        row3: {
            xData: string[];
            yData: number[];
        };
        row4: {
            xData: string[];
            yData: number[];
        };
    };
    right_side: {
        row1: {
            col1: {
                data1: {
                    label: string;
                    value: number;
                    text: string;
                    percentage: number;
                    unit: string;
                }[];
                data2: {
                    label: string;
                    value: number;
                    percentage: number;
                    gradientColors: {
                        light: string;
                        middle: string;
                        dark: string;
                    };
                }[];
            };
            col2: {
                data: {
                    position: string;
                    ism: string;
                    suspected: string;
                    IGG: string;
                }[];
            };
        };
        row2: {
            data: {
                title: string;
                time: string;
                color: string;
                status: string;
            }[];
        };
    };
}

export interface WeatherData {
    temperature: number;
    humidity: number;
    icon: string;
}
