import React, { Component } from 'react';
import { 
    Table, 
    Row, Col,
} from 'reactstrap';


interface IProps {
    data: [];
}

interface IState {
    eventCode: string
    eventCategory: string
}

class PatientData extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            eventCode: '',
            eventCategory: ''
        };
    }

    componentDidMount() {
    }
    render() {
        return (
            <div>
            <Row  style ={{ fontSize: 24, fontFamily: 'verdana-bold' }}>
                
                        <Col xs="4" sm="4" md="4" style={{ left: 50 }}>
                            Name
                        </Col>

                        <Col xs="1" sm="1" md="1" style={{ textAlign: 'center' }}>
                            Age
                        </Col>

                        <Col xs="1" sm="1" md="2" style={{ textAlign: 'center' }}>
                            Event Code
                        </Col>

                        <Col xs="1" sm="1" md="2" style={{ textAlign: 'center' }}>
                            Code Category
                        </Col>

                        <Col xs="2" sm="2" md="3" style={{ textAlign: 'center', right: 50, position: 'fixed' }}>
                            Event Date
                        </Col>
                    
            </Row>
            <Row style={{ margin: 10, marginTop: 0 }}>
                <Col>
                    <Table dark>
                        {this.props.data.map((value: any, index: number) => {
                        return (
                            <tbody>
                                <tr key={index} style={{ height: 80 }}>
                                    <th className='h3' scope="row" style={{ paddingLeft: 20, width: 480 }}>{value.name}</th>
                                    <td className='h4'>{value.age}</td>
                                    <td className='h4'>{value.event_code}</td>
                                    <td className='h4'>{value.code_category}</td>
                                    <td className='h4'>{value.event_date}</td>
                                </tr>
                            </tbody>
                        );
                        })}
                    </Table>
                </Col>
            </Row>
            </div>
        );
    }
}
export default PatientData;
