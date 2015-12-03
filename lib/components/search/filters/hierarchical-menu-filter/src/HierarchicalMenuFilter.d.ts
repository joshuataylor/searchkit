import HierarchicalFacetAccessor from "../../../../../domain/accessors/HierarchicalFacetAccessor.ts";
import SearchkitComponent from "../../../../SearchkitComponent.ts";
export interface IHierarchicalMenuFilter {
    fields: Array<string>;
    title: string;
}
export default class HierarchicalMenuFilter extends SearchkitComponent<IHierarchicalMenuFilter, any> {
    accessors: Array<HierarchicalFacetAccessor>;
    constructor(props: IHierarchicalMenuFilter);
    componentWillMount(): void;
    createAccessors(): void;
    addFilter(accessor: any, option: any): void;
    private getLevelAccessor(level);
    renderOption(level: any, option: any): JSX.Element;
    hasOptions(): boolean;
    renderOptions(level: any): JSX.Element;
    render(): JSX.Element;
}