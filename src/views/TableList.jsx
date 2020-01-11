/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">Your Tests</CardTitle>
                  <p className="category">We keep only failed tests.</p>
                </CardHeader>
                <CardBody>
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
                      <tr>
                        <td>345dfasdf3</td>
                        <td>SEC0001</td>
                        <td>http://myuglywebiste.com/api/v1/</td>
                        <td className="text-danger"><i className="tim-icons icon-alert-circle-exc"></i> FAILED</td>
                        <td>10 Jan 2020 11:21:33 AM</td>
                        <td className="text-center">SEC0001 Solution</td>
                      </tr>
                      <tr>
                        <td>345dfasdf3</td>
                        <td>SEC0002</td>
                        <td>http://myuglywebiste.com/api/v1/</td>
                        <td className="text-danger"><i className="tim-icons icon-alert-circle-exc"></i> FAILED</td>
                        <td>10 Jan 2020 11:21:31 AM</td>
                        <td className="text-center">SEC0002 Solution</td>
                      </tr>
                      <tr>
                        <td>345dfasdf3</td>
                        <td>SEC0003</td>
                        <td>http://myuglywebiste.com/api/v1/</td>
                        <td className="text-danger"><i className="tim-icons icon-alert-circle-exc"></i> FAILED</td>
                        <td>10 Jan 2020 11:21:31 AM</td>
                        <td className="text-center">SEC0003 Solution</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
