



const palette = {
    light : {
    primary: {
        main: '#000',
        contrastText: '#fff'
    },

    secondary: {
        main: '#000',
        contrastText: '#fff'
    },

    text: {
        primary: '#000',
        secondary: '#000'
    },

    background: {
        default: '#fff',
        paper: '#fff'
        
    },

    action: {
        active: '#000',
        hover: '#000',
        selected: '#000',
        disabled: '#000',
        disabledBackground: '#000'

    },
},

    dark: {
        primary: {
            main: '#fff',
            contrastText: '#000'
        },

        secondary: {
            main: '#fff',
            contrastText: '#000'
        },

        text: {
            primary: '#fff',
            secondary: '#fff'
        },

        background: {
            default: '#000',
            paper: '#000'

        },

        action: {
            active: '#fff',
            hover: '#fff',
            selected: '#fff',
            disabled: '#fff',
            disabledBackground: '#fff'

        },
    }
}







export const getDesignTokens = (mode) => (
    {
        palette:{
            mode,
            ...mode === 'dark' ? {
                primary: {
                    main: '#fff',
                    contrastText: '#000'
                },
                secondary: {
                    main: '#fff',
                    contrastText: '#000'
                },
                text: {
                    primary: '#fff',
                    secondary: '#fff'
                },
                background: {
                    default: '#000',
                    paper: '#000'

                },
                action: {
                    active: '#fff',
                    hover: '#fff',
                    selected: '#fff',
                    disabled: '#fff',
                    disabledBackground: '#fff'

                },
                divider: '#fff'
            } : {
                primary: {
                    main: '#000',
                    contrastText: '#fff'
                },
                secondary: {
                    main: '#000',
                    contrastText: '#fff'
                },
                text: {
                    primary: '#000',
                    secondary: '#000'
                },
                background: {
                    default: '#fff',
                    paper: '#fff'

                },
                action: {
                    active: '#000',
                    hover: '#000',
                    selected: '#000',
                    disabled: '#000',
                    disabledBackground: '#000'

                },
                divider: '#000',

            }



                




        },
        typography: {
            fontFamily: 'Roboto, sans-serif',
            fontSize: 14,
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightBold: 700,
            h1: {
                fontSize: '6rem',
                fontWeight: 300,
                lineHeight: 1.167,
                letterSpacing: '-0.01562em'
            },
            h2: {
                fontSize: '3.75rem',
                fontWeight: 300,
                lineHeight: 1.2,
                letterSpacing: '-0.00833em'
            },
            h3: {
                fontSize: '3rem',
                fontWeight: 400,
                lineHeight: 1.167,
                letterSpacing: '0em'
            },
            h4: {
                fontSize: '2.125rem',
                fontWeight: 400,
                lineHeight: 1.235,
                letterSpacing: '0.00735em'
            },
            h5: {   
                fontSize: '1.5rem',
                fontWeight: 400,
                lineHeight: 1.334,
                letterSpacing: '0em'
            },
            body1: {
                fontSize: '1rem',
                fontWeight: 400,
                lineHeight: 1.5,
                letterSpacing: '0.00938em'
            },

        }
    }

);

export const getThemedComponents = (mode) => ({

    components: {
        ...mode === 'dark' ? {
            MuiButton: {
                styleOverrides: {
                    root: {
                        color: '#fff',
                        backgroundColor: '#000',
                        '&:hover': {
                            backgroundColor: '#000'
                        }
                    }
                }
            },
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        backgroundColor: '#000'
                    }
                }
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#000'
                    }
                }
            },

            MuiDrawer: {    
                styleOverrides: {
                    paper: {
                        backgroundColor: '#000'
                    }
                }
            },
            MuiListItem: {
                styleOverrides: {
                    root: {
                        '&.Mui-selected': {
                            backgroundColor: '#000'
                        }
                    }
                }
            },

            MuiListItemIcon: {
                styleOverrides: {
                    root: {
                        color: '#fff'
                    }
                }
            },

            MuiListItemText: {
                styleOverrides: {
                    primary: {
                        color: '#fff'
                    }
                }
            },

            MuiDivider: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#fff'
                    }
                }
            },

            MuiIconButton: {
                styleOverrides: {
                    root: {
                        color: '#fff'
                    }
                }
            },
            
            MuiInputBase: {
                styleOverrides: {
                    root: {
                        color: '#fff'
                    }
                }
            },

            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        '&.Mui-focused fieldset': {
                            borderColor: '#fff'
                        }
                    }
                }
            },

            MuiFormLabel: {

                styleOverrides: {
                    root: {
                        color: '#fff'
                    }


                }

            },

            MuiBox: {
                styleOverrides: {
                    root: {
                        color: '#fff'
                    }
                }
            },

        } : {
            MuiButton: {
                styleOverrides: {
                    root: {
                        color: '#000',
                        backgroundColor: '#fff',
                        '&:hover': {
                            backgroundColor: '#fff'
                        }
                    }
                }
            },
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        backgroundColor: '#fff'
                    }
                }
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#fff'
                    }
                }
            },

            MuiDrawer: {    
                styleOverrides: {
                    paper: {
                        backgroundColor: '#fff'
                    }
                }
            },
            MuiListItem: {
                styleOverrides: {
                    root: {
                        '&.Mui-selected': {
                            backgroundColor: '#fff'
                        }
                    }
                }
            },

            MuiListItemIcon: {
                styleOverrides: {
                    root: {
                        color: '#000'
                    }
                }
            },

            MuiListItemText: {
                styleOverrides: {
                    primary: {
                        color: '#000'
                    }
                }
            },

            MuiDivider: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#000'
                    }
                }
            },

            MuiIconButton: {
                styleOverrides: {
                    root: {
                        color: '#000'
                    }
                }
            },
            
            MuiInputBase: {
                styleOverrides: {
                    root: {
                        color: '#000'
                    }
                }
            },

            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        '&.Mui-focused fieldset': {
                            borderColor: '#000'
                        }
                    }
                }
            },

            MuiBox: {
                styleOverrides: {
                    root: {
                        color: '#000'

                    }
                }
            },

           



        }
    }


    
});




export const getDesignTokens = (mode) => (
    {
    
    palette:{
        mode,
        ...mode === 'dark' ? {
            primary: {
                main :palette.dark.primary.main,
                light: palette.dark.primary.light,
                dark: palette.dark.primary.dark,

                contrastText: palette.dark.primary.contrastText
            },
            secondary: {
                main: palette.dark.secondary.main,
                light: palette.dark.secondary.light,
                dark: palette.dark.secondary.dark,

                contrastText: palette.dark.secondary.contrastText
            },
            text: {
                primary: palette.dark.text.primary,
                secondary: palette.dark.text.secondary
            },
            background: {
                default: palette.dark.background.default,
                paper: palette.dark.background.paper
            },
            action: {
                active: palette.dark.action.active,
                hover: palette.dark.action.hover,
                selected: palette.dark.action.selected,
                disabled: palette.dark.action.disabled,
                disabledBackground: palette.dark.action.disabledBackground

            },
        } : {
            primary: {
                main: palette.light.primary.main,
                light: palette.light.primary.light,
                dark: palette.light.primary.dark,
                

                contrastText: palette.light.primary.contrastText
            },
            secondary: {
                main: palette.light.secondary.main,
                contrastText: palette.light.secondary.contrastText
            },
            text: {
                primary: palette.light.text.primary,
                secondary: palette.light.text.secondary
            },
            background: {
                default: palette.light.background.default,
                paper: palette.light.background.paper
            },
            action: {
                active: palette.light.action.active,
                hover: palette.light.action.hover,
                selected: palette.light.action.selected,
                disabled: palette.light.action.disabled,
                disabledBackground: palette.light.action.disabledBackground

            },

        }
   

        

    

    }
   

});
    




