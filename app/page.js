'use client';
import { createContext } from 'react';
import { ThemeProvider } from '@mui/material';
import theme from '@/theme/theme';
import SORWOR from '../data/data';

import Image from 'next/image';
import styles from './page.module.css';
import { Typography, Box, Grid, Avatar } from '@mui/material';

const Context = createContext();
export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <main className={styles.main}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sx={{ marginBottom: 6 }}>
                            <Typography variant='h1' component='h1' sx={{ fontWeight: 600 }}>
                                จับตา สว. 66
                            </Typography>
                        </Grid>
                        {SORWOR.map((person) => (
                            <Grid
                                item
                                xs={4}
                                md={3}
                                lg={2}
                                sx={{
                                    padding: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar
                                    alt='Remy Sharp'
                                    src={person.image}
                                    sx={{ width: 120, height: 120, marginBottom: 2 }}
                                />
                                <Typography variant='h6' component='h6'>
                                    {person.fullName}
                                </Typography>
                                <Typography variant='subtitle1' component='h6'>
                                    งดออกเสียง
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </main>
        </ThemeProvider>
    );
}
