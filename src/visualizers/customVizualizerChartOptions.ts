import * as Highcharts from 'highcharts'

export interface ICustomVizualizerChartOptions extends Highcharts.Options {
    combinationConfig?: {
        [key: string]: 'line' | 'column'
    };
    thresholds?: Highcharts.NavigatorYAxisPlotLinesOptions[],
    yAxisMinMaxConfig?: ({
        min: number,
        max: number
    } | null)[]
}