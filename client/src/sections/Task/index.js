import React from "react";
import { Row, Col } from "antd";
import { TaskListing, Announce, FileDownload } from "../../components";

export function Indexs() {
  return (
    <div>
      <Row justify="center">
        <Col span={12}>
          <TaskListing />
        </Col>
        <Col span={1}></Col>
        <Col span={7}>
          <Announce />
          <FileDownload />
        </Col>
      </Row>
    </div>
  );
}
