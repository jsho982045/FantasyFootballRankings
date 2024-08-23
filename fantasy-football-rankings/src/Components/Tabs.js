import React, { useState } from 'react';
//import YahooRankings from './YahooRankings';
import ESPNRankings from './ESPNRankings';
//import ProFootballTalkRankings from './ProFootballTalkRankings';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Yahoo');

  const renderContent = () => {
    switch (activeTab) {
      case 'Yahoo':
        // return <YahooRankings />;
        break;
      case 'ESPN':
        return <ESPNRankings />;
      case 'ProFootballTalk':
        // return <ProFootballTalkRankings />;
        break;
      default:
        // return <YahooRankings />;
        break;
    }
  };
  

  return (
    <div>
      <div className="tabs">
        <button onClick={() => setActiveTab('Yahoo')}>Yahoo</button>
        <button onClick={() => setActiveTab('ESPN')}>ESPN</button>
        <button onClick={() => setActiveTab('ProFootballTalk')}>Pro Football Talk</button>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Tabs;
