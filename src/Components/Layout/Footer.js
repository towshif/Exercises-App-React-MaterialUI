import React from "react"
import { Paper, Tabs, Tab } from "@material-ui/core"

export default ({ muscles, category, onSelect }) => 
  { 
    const index = category
      ? muscles.findIndex(group => group === category) + 1
      : 0
    
    return <Paper>
    <Tabs
      value={index}
      onChange= {(e, index) =>
        onSelect(index === 0 ? '' : muscles[index-1])
      }
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="All" />
      {muscles.map(group =>
        <Tab label={group} />
      )}

      {/*
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
      */}
    </Tabs>
  </Paper>

  }

