import {Box, Tabs, Tab, Typography, TableContainer, TableHead, Table, TableCell, TableRow, TableBody, Paper} from '@/app/lib/mui-material'
import { useEffect, useState } from 'react';
import { Player } from '../types/Player';
import { Fixture } from '../types/Fixture';
import { PlayerHistory } from '../types/PlayerHistory';
import {getPositionByType, getTeamById} from "../utils/lookup"
import { PlayerHistoryRow } from './PlayerHistoryRow';
import { PlayerHistorySchemaRow } from './PlayerHistorySchemaRow';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  
export function HistoryFixtureTabs(props: {history: PlayerHistory[], fixtures: Fixture[]}) {
        let {history, fixtures} = props
        const [value, setValue] = useState(0);
        let sorted_history = [...history].sort((a,b) => b.round-a.round)
        const handleChange = (event: React.SyntheticEvent, newValue: number) => {
            setValue(newValue);
        };
  
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="History" {...a11yProps(0)} />
            <Tab label="Fixtures" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Round</TableCell>
                  <TableCell align="right">Opp</TableCell>
                  <TableCell align="right">Pts</TableCell>
                  <TableCell align="right">Starts</TableCell>
                  <TableCell align="right">Minutes</TableCell>
                  <TableCell align="right">G</TableCell>
                  <TableCell align="right">A</TableCell>
                  <TableCell align="right">xG</TableCell>
                  <TableCell align="right">xA</TableCell>
                  <TableCell align="right">xGA</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sorted_history.map((h) => (
                  <TableRow
                    key={h.round}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {h.round}
                    </TableCell>
                    <TableCell align="right">{h.opponent_team}</TableCell>
                    <TableCell align="right">{h.total_points}</TableCell>
                    <TableCell align="right">{h.starts}</TableCell>
                    <TableCell align="right">{h.minutes}</TableCell>
                    <TableCell align="right">{h.goals_scored}</TableCell>
                    <TableCell align="right">{h.assists}</TableCell>
                    <TableCell align="right">{h.expected_goals}</TableCell>
                    <TableCell align="right">{h.expected_assists}</TableCell>
                    <TableCell align="right">{h.expected_goal_involvements}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Fixtures
        </CustomTabPanel>
      </Box>
    );
  }