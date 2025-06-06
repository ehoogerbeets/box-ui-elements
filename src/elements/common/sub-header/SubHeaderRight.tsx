import * as React from 'react';
import Sort from './Sort';
import Add from './Add';
import GridViewSlider from '../../../components/grid-view/GridViewSlider';
import ViewModeChangeButton from './ViewModeChangeButton';
import { VIEW_FOLDER, VIEW_MODE_GRID } from '../../../constants';
import type { ViewMode } from '../flowTypes';
import type { SortBy, SortDirection, View, Collection } from '../../../common/types/core';
import './SubHeaderRight.scss';

export interface SubHeaderRightProps {
    canCreateNewFolder: boolean;
    canUpload: boolean;
    currentCollection: Collection;
    gridColumnCount: number;
    gridMaxColumns: number;
    gridMinColumns: number;
    maxGridColumnCountForWidth: number;
    onCreate: () => void;
    onGridViewSliderChange: (newSliderValue: number) => void;
    onSortChange: (sortBy: SortBy, sortDirection: SortDirection) => void;
    onUpload: () => void;
    onViewModeChange?: (viewMode: ViewMode) => void;
    view: View;
    viewMode: ViewMode;
}

const SubHeaderRight = ({
    canCreateNewFolder,
    canUpload,
    currentCollection,
    gridColumnCount,
    gridMaxColumns,
    gridMinColumns,
    maxGridColumnCountForWidth,
    onCreate,
    onGridViewSliderChange,
    onSortChange,
    onUpload,
    onViewModeChange,
    view,
    viewMode,
}: SubHeaderRightProps) => {
    const { items = [] }: Collection = currentCollection;
    const hasGridView: boolean = !!gridColumnCount;
    const hasItems: boolean = items.length > 0;
    const isFolder: boolean = view === VIEW_FOLDER;
    const showSort: boolean = isFolder && hasItems;
    const showAdd: boolean = (!!canUpload || !!canCreateNewFolder) && isFolder;
    return (
        <div className="be-sub-header-right">
            {hasItems && viewMode === VIEW_MODE_GRID && (
                <GridViewSlider
                    columnCount={gridColumnCount}
                    gridMaxColumns={gridMaxColumns}
                    gridMinColumns={gridMinColumns}
                    maxColumnCount={maxGridColumnCountForWidth}
                    onChange={onGridViewSliderChange}
                />
            )}
            {hasItems && hasGridView && (
                <ViewModeChangeButton viewMode={viewMode} onViewModeChange={onViewModeChange} />
            )}
            {showSort && <Sort onSortChange={onSortChange} />}
            {showAdd && (
                <Add
                    isDisabled={!isFolder}
                    onCreate={onCreate}
                    onUpload={onUpload}
                    showCreate={canCreateNewFolder}
                    showUpload={canUpload}
                />
            )}
        </div>
    );
};

export default SubHeaderRight;
