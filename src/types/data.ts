export interface SummaryData {
    leftSide: {
        row1: {
            col1: {
                title: string;
                percentage: number;
                data: {
                    label: string;
                    value: number;
                    total: number;
                    
                }[];
            };
            col2: {
                title: string;
                data: {
                    label: string;
                    value: number;
                }[];
            };
        };
        row2: {
            col1: {
                title: string;
                data: {
                    label: string;
                    value1: number;
                    value2: number;
                    total: number;
                    index: string;
                }[];
            };
            col2: {
                title: string;
                data: {
                    label: string;
                    value: number;
                    total: number;
                    index: string;
                }[];
            };
        };
        row3: {
            title: string;
            xData: string[];
            yData: number[];
        };
        row4: {
            title: string;
            xData: string[];
            yData: number[];
        };
    };
    rightSide: {
        row1: {
            col1: {
                title: string;
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
                title: string;
                focusedIndex: number;
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
