import React from 'react'
import "./index.scss"
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import IconDelete from "assets/img/bx-trash1.png"
import IconEdit from "assets/img/bxs-edit-alt1.png"
import IconType from "assets/img/iconQR.png"

export default function Full() {
    const dataList = 
    [
      {
        type: "QR",
        url: "https://cooking.nytimes.com/",
        link: "https://id.qr-code-generator.com/",
      },
      {
        type: "QR",
        url: "https://cooking.nytimes.com/",
        link: "https://id.qr-code-generator.com/",
      },
      {
        type: "QR",
        url: "https://cooking.nytimes.com/",
        link: "https://id.qr-code-generator.com/",
      },
      {
        type: "QR",
        url: "https://cooking.nytimes.com/",
        link: "https://id.qr-code-generator.com/",
      },
      {
        type: "QR",
        url: "https://cooking.nytimes.com/",
        link: "https://id.qr-code-generator.com/",
      },
    ]
  return (
    <div className='Full'>
        <Stack direction="horizontal" gap={3}>
            <h2 className='headerFull '>QR Redirect<span className='headerFull'>Total Records: 10</span></h2>
            <Button className='ms-auto buttonADD'>ADD + </Button>
        </Stack>
        <Table className='tableFull'>
            <tbody>
                <tr className='listContent'>
                    <th className='type' >Type</th>
                    <th className='url'>Redirect URL</th>
                    <th className='qr'>Link to QR</th>
                    <th className='action'>Action</th>
                </tr>
                {dataList.map((index,key) => {
                    return(
                    <tr key={key}>
                        <td className='type'><span className='iconType'><img src={IconType} alt="IconType" /></span>{index.type}</td>
                        <td className='url'><span>{index.url}</span></td>
                        <td className='qr'><span>{index.link}</span></td>
                        <td className='action'>
                            <span className='editList'><img src={IconEdit} alt="IconEdit" /></span>
                            <span className='deleteList'><img src={IconDelete} alt="IconDelete" /></span>
                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </Table>
    </div>
  )
}
