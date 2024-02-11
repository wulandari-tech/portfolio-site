import React from "react";
import { ComponentListProps } from "@/types";
import { v4 as uuidv4 } from 'uuid';

export default function ComponentList<T extends object>({ dataList, ListedComponent }: ComponentListProps<T>) {
    return (
        <>
            {dataList.map((data, index) => <li key={index}>
                <ListedComponent {...data}/>
            </li>)}
        </>
    )
}
