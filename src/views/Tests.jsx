import React, { useEffect } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

import api from 'api';
import StoreProvider, { actions, selectors } from 'store/StoreProvider';

const Tests = ({ setTests, tests }) => {
  useEffect(() => {
    api.resources.getUserTests()
      .then(({ data }) => {
        setTests(data)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card className="card-plain">
            <CardHeader>
              <CardTitle tag="h4">Your Tests</CardTitle>
              <p className="category">We keep only failed tests.</p>
            </CardHeader>
            <CardBody>
              {
                tests.length > 0 ? (
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Suite ID</th>
                        <th>Test Code</th>
                        <th>Tested URL</th>
                        <th>Result</th>
                        <th>Timestamp</th>
                        <th className="text-center">Solution</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        tests.map(test => (
                        <tr key={test.id}>
                          <td>{test.id}</td>
                          <td>SEC0001</td>
                          <td>{test.url}</td>
                          <td className="text-danger">
                            <i className="tim-icons icon-alert-circle-exc"/>
                            FAILED
                          </td>
                          <td>10 Jan 2020 11:21:33 AM</td>
                          <td className="text-center">{test.tests}</td>
                        </tr>
                        ))
                      }
                    </tbody>
                  </Table>
                ) : (
                  <p>They all pass. Congratulations!</p>
                )
              }
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default StoreProvider.connect(
  state => ({
    tests: selectors.tests.list(state)
  }),
  {
    setTests: actions.tests.setTests
  }
)(Tests);