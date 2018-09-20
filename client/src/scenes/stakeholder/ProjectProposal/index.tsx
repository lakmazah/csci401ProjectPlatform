import * as React from 'react';
import ProposalForm from './ProposalForm';
import { Card } from '@blueprintjs/core';

class StakeholderProjectProposal extends React.Component {
    render() {
        return (
            <div className="csci-container">
                <div className="csci-main">
                    <Card>
                        <ProposalForm />
                    </Card>
                </div>
            </div>
        );
    }
}

export default StakeholderProjectProposal;
