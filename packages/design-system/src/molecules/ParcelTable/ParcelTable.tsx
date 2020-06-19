import React from 'react'

import styled from '@emotion/styled'

const StyledParcelTable = styled.table`

    width: 100%;

    td, th {
        text-align: center;
    }

    thead {
        background-color: #f5f5f5;

        tr {
            height: 48px;

            th {
                font-size: 13px;
                color: #757575;
                vertical-align: bottom;
                border-bottom: 0px;
                padding: 14px;
            }
        }
    }

    tbody {
        tr {
            border-bottom: 1px solid #e1e1e1;

            td {
                padding: 11px;
                line-height: 1.42857143;
                vertical-align: middle;
                border-top: 0px;
                color: #757575;
            }
        }
    }

`

interface ITableData {
    datetime: string,
    telno: string,
    kind: string

}

interface IParcelTableProps {
    heads: string[],
    data: ITableData[]
}

const ParcelTable = ({ heads, data }: IParcelTableProps) => (
    <StyledParcelTable>

        <thead>
            <tr>
                {heads.map((head, i) => 
                    <th key={i}>
                        {head}
                    </th>
                )}
            </tr>
        </thead>
        <tbody>

            {data.map((e, i) => 
                <tr key={i}>
                    <td>{e.datetime}</td>
                    <td>{e.telno}</td>
                    <td>{e.kind}</td>
                </tr>
            )}

        </tbody>

    </StyledParcelTable>
)

export default ParcelTable
