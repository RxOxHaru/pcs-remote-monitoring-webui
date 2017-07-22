// Copyright (c) Microsoft. All rights reserved.

import React from 'react';
import DeviceProvisioningWorkflow from './deviceProvisioningWorkflow';
import fetch from 'node-fetch';
import { mount } from 'enzyme';

window.fetch = fetch;

it('renders without crashing', () => {
    mount(<DeviceProvisioningWorkflow />);
});
