import { ChartType, ChartOptions } from "./iChartOptions";
import { ChartRef } from "../entities/gridOptions";
import { CreateCrossFilterChartParams, CreatePivotChartParams, CreateRangeChartParams } from "../gridApi";
import { CellRangeParams } from "./iRangeController";

export interface GetChartImageDataUrlParams {
    type?: string;
}

export interface ChartModel {
    chartId: string;
    cellRange: CellRangeParams;
    chartType: ChartType;
    chartThemeName?: string;
    chartOptions: ChartOptions<any>;
    chart: any;
    getChartImageDataURL: (params: GetChartImageDataUrlParams) => string;
}

export interface IChartService {
    getChartModels(): ChartModel[];
    createRangeChart(params: CreateRangeChartParams): ChartRef | undefined;
    createCrossFilterChart(params: CreateCrossFilterChartParams): ChartRef | undefined;
    createChartFromCurrentRange(chartType: ChartType): ChartRef | undefined;
    createPivotChart(params: CreatePivotChartParams): ChartRef | undefined;
}