import React, { Component } from 'react';
import { Spinner } from 'reactstrap';
import * as HttpStatus from 'http-status-codes';

import PatientFilter from './PatientFilter'

interface IProps {
}

interface IState {
    patientData: any
    loading: boolean
}


class Dashboard extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.getData = this.getData.bind(this);
        this.setData = this.setData.bind(this);
        this.state = {
            patientData: {},
            loading: true
        };
    }

    async componentDidMount() {
        let url = 'https://xwyir2jma1.execute-api.us-east-1.amazonaws.com/prod/healthreveal'
        await this.setData(url)
    }

    async getData (url: string) {
        try {
            let result = await fetch(url, {
                method: 'GET'
            });

            // Bail if status code is not OK
            if ((result.status).toString() !== (HttpStatus.OK).toString()) return undefined;

            // Read response
            let response = await result.json();
            return response;
        } catch (error) {
          return undefined;
        }
    }

    async setData (url: string) {
        let data = await this.getData(url)
        this.setState ({
            patientData: data.patient_data
        })

        if (this.state.patientData === [] || this.state.patientData === undefined || this.state.patientData === '' || this.state.patientData === null || this.state.patientData.length === 0){
            await this.setState ({
                loading: false
            })
        } else {
            await this.setState ({
                loading: false
            })
        }
        
    }

    render() {
        return (
            <div style={{backgroundColor: 'grey'}}>
            {(this.state.loading) ?
                <Spinner color="danger" />
                :
                <PatientFilter data={this.state.patientData}/>    
            }
            </div>
            
        );
    }
}
export default Dashboard;
