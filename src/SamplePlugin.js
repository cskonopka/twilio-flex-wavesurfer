import { FlexPlugin } from 'flex-plugin';
import React from 'react';
import WavesurferPlugin from './WavesurferPlugin';

const PLUGIN_NAME = 'SamplePlugin';

export default class SamplePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  init(flex, manager) {
    flex.AgentDesktopView.Panel1.Content.add(<WavesurferPlugin key="demo-component"/>)
  }
}