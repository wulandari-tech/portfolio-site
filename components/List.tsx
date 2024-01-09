// @ts-nocheck
// TODO: sort out typing

export default function List({ dataList, ListedComponent }) {
    return (
        <ol>
            {dataList.map((data, index) => <li key={index}>
                <ListedComponent {...data}/>
            </li>)}
        </ol>
    )
}