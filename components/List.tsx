import React from "react";
import { ListProps } from "@/types";
import { v4 as uuidv4 } from 'uuid';

export default function List<T extends object>({ dataList, ListedComponent }: ListProps<T>) {
    return (
        <>
            {dataList.map((data, index) => <li key={index}>
                <ListedComponent {...data}/>
            </li>)}
        </>
    )
}
