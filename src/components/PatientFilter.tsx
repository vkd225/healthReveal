import React, { Component } from 'react';
import { 
    Row, Col,
    FormGroup, Input
} from 'reactstrap';

import PatientData from './PatientData'

interface IProps {
    data: []
    
}

interface IState {
    eventCode: any
    codeCategory: any
    filteredData: any
    filteredDataCode: any;
    filteredDataCategory: any;
}

class PatientFilter extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.handleEventCodeChange = this.handleEventCodeChange.bind(this);
        this.handleCodeCategoryChange = this.handleCodeCategoryChange.bind(this);
        this.filterEventCode = this.filterEventCode.bind(this);
        this.filterCodeCategory = this.filterCodeCategory.bind(this);

        this.state = {
            eventCode: '',
            codeCategory: '',
            filteredData: [],
            filteredDataCode: [],
            filteredDataCategory: []
        };
    }

    componentDidMount() {
    }

    async handleEventCodeChange (event: any) {
        await this.setState({
            eventCode: event.target.value
        });
        await this.filterEventCode()
    };

    async handleCodeCategoryChange (event: any) {
        await this.setState({
            codeCategory: event.target.value
        });
        await this.filterCodeCategory()
    };

    async filterEventCode(){
        let filtered_data = this.props.data.filter(
            (patient: any) => {
            return patient.event_code.toLowerCase().indexOf(
                this.state.eventCode.toLowerCase()) !== -1;
        })
        
        await this.setState({
            filteredDataCode : filtered_data
        })
        let final_data = this.state.filteredDataCode.concat(this.state.filteredDataCategory)

        await this.setState({
            filteredData : final_data
        })
        console.log(this.state.filteredData)
    }

    async filterCodeCategory(){
        let filtered_data = this.props.data.filter(
            (patient: any) => {
            return patient.code_category.toLowerCase().indexOf(
                this.state.codeCategory.toLowerCase()) !== -1;
        })

        await this.setState({
            filteredDataCategory : filtered_data
        })
        let final_data = this.state.filteredDataCategory.concat(this.state.filteredDataCode)

        await this.setState({
            filteredData : final_data
        })
        console.log(this.state.filteredData)
    }

    render() {

        return (
            <div>
                <Row style={{ padding: 30 }}>
                    <Col className='h1' xs="9" sm="9" md="9">
                        PATIENT DATA
                    </Col>

                    <Col className='h3' xs="3" sm="3" md="3">
                        Total Patients: 9
                    </Col>
                </Row>

                <Row>
                    <Col xs="4" sm="4" md="4"></Col>
                    <Col xs="1" sm="1" md="1"></Col>
                    <Col xs="1" sm="1" md="2" style={{ left: 50 }}>
                        <FormGroup>
                            <Input placeholder="event code" style={{width: 170}} 
                            value={this.state.eventCode} onChange={this.handleEventCodeChange}/>
                        </FormGroup>
                    </Col>
                    <Col xs="1" sm="1" md="2" style={{ left: 30 }}>
                        <FormGroup>
                            <Input placeholder="event category" style={{width: 170}}
                            value={this.state.codeCategory} onChange={this.handleCodeCategoryChange}/>
                        </FormGroup>
                    </Col>
                    <Col xs="2" sm="2" md="3"></Col>
                </Row>

                <PatientData data={this.props.data}/>
            </div>
        );
    }
}
export default PatientFilter;
