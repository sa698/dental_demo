import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Form, Input, Popconfirm, Table } from "antd";
 
 

 
const TableAdd = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: "0",
      teeth_no: "50",
      operation_perform: "Yes",
      icd_code: "ICD 001",
      icd_value: "1200",
    },
  ]);

  const [count, setCount] = useState(2);
  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const handleAdd = () => {
    const newDataSource = [...dataSource];
    newDataSource.push({
      key: newDataSource.length + 1,
      teeth_no: "",
      operation_perform: "",
      icd_code: "",
      icd_value: "",
    });
    setDataSource(newDataSource);
  };
  const handleChangeValueSet = (value, key, field) => {
    const newDataSource = [...dataSource];
    newDataSource.forEach((val) => {
      if (val.key === key) {
        val[field] = value;
      }
    });
    setDataSource(newDataSource);

    // console.log("newDataSource", newDataSource);
  };
  const defaultColumns = [
    {
      title: "Teeth No",
      dataIndex: "teeth_no",
      width: "30%",
      editable: true,
      render: (text, record, index) => {
        return (
          <Input
            style={{ width: "100%" }}
            autoSize={{ minRows: 1, maxRows: 6 }}
            bordered={false}
            value={record.description}
            onChange={(e) =>
              handleChangeValueSet(e.target.value, record.key, "teeth_no")
            }
          />
        );
      },
    },
    {
      title: "Operation Perform",
      dataIndex: "operation_perform",
      render: (text, record, index) => {
        return (
          <Input
            style={{ width: "100%" }}
            autoSize={{ minRows: 1, maxRows: 6 }}
            bordered={false}
            value={record.description}
            onChange={(e) =>
              handleChangeValueSet(
                e.target.value,
                record.key,
                "operation_perform"
              )
            }
          />
        );
      },
    },
    {
      title: "ICD Code",
      dataIndex: "icd_code",
      render: (text, record, index) => {
        return (
          <Input
            style={{ width: "100%" }}
            autoSize={{ minRows: 1, maxRows: 6 }}
            bordered={false}
            value={record.description}
            onChange={(e) =>
              handleChangeValueSet(e.target.value, record.key, "icd_code")
            }
          />
        );
      },
    },
    {
      title: "ICD Value",
      dataIndex: "icd_value",
      render: (text, record, index) => {
        return (
          <Input
            style={{ width: "100%" }}
            autoSize={{ minRows: 1, maxRows: 6 }}
            bordered={false}
            value={record.description}
            onChange={(e) =>
              handleChangeValueSet(e.target.value, record.key, "icd_value")
            }
          />
        );
      },
    },
    {
      title: "Operation",
      dataIndex: "operation",
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];

  return (
    <div style={{
        padding:"10px"
    }}>
    
      <Table
        rowClassName={() => "editable-row"}
        bordered
        dataSource={dataSource}
        columns={defaultColumns}
        pagination={false}
      />
        <Button
        onClick={handleAdd}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        Add a row
      </Button>
    </div>
  );
};

export default TableAdd;
