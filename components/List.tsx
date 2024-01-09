import React from "react";
import { ListProps } from "@/types";

export default function List<T extends object>({ dataList, ListedComponent }: ListProps<T>) {
    return (
        <ol>
            {/* TODO: use a more unique ID for key */}
            {dataList.map((data, index) => <li key={index}>
                <ListedComponent {...data}/>
            </li>)}
        </ol>
    )
}
