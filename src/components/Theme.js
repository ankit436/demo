



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
   

        

    

    },
         typography: {
        fontFamily: 'Roboto',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
            lineHeight: 1.5,
            letterSpacing: '-0.01562em',
            color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary
        },
        h2: {
            
            fontSize: '2rem',
            fontWeight: 700,
            lineHeight: 1.5,
            letterSpacing: '-0.00833em',
            color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 700,
            lineHeight: 1.5,
            letterSpacing: '0em',
            color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 700,
            lineHeight: 1.5,
            letterSpacing: '0.00735em',
            color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary
        },
        h5: {
            fontSize: '1.25rem',
            fontWeight: 700,
            lineHeight: 1.5,
            letterSpacing: '0em',
            color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary
        },
        h6: {
            fontSize: '1rem',
            fontWeight: 700,
            lineHeight: 1.5,
            letterSpacing: '0.0075em',
            color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary
        },
        subtitle1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: '0.00938em',
            color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary
        },
        subtitle2: {
            fontSize: '0.875rem',
            fontWeight: 500,
            lineHeight: 1.5,
            letterSpacing: '0.00714em',
            color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: '0.00938em',
            color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: '0.01071em',
            color: mode === 'dark'
                ? palette.dark.text.primary : palette.light.text.primary
        },
        button: {
            fontSize: '0.875rem',
            fontWeight: 500,
            lineHeight: 1.5,
            letterSpacing: '0.02857em',
            color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary
        },
        caption: {
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: '0.03333em',
            color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary
        },
        overline: {
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: '0.08333em',
            textTransform: 'uppercase',
            color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary
        }
    },

   

});
    



export const getThemedComponents = (mode) => (
    {
        components:{
            MuiButton: {
                styleOverrides: {
                    root: {
                        color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                        backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                        '&:hover': {
                            backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,

                        }
                    },
                    text: {
                        color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                    },
                    outlined: {
                        color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                        border: '1px solid',
                        borderColor: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                        '&:hover': {
                            backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                            borderColor: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                        }
                    },
                    contained: {
                        color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                        backgroundColor: mode === 'dark' ? palette.dark.primary.main : palette.light.primary.main,
                        '&:hover': {
                            backgroundColor: mode === 'dark' ? palette.dark.primary.main : palette.light.primary.main,

                        }
                    },
                    containedPrimary: {
                        color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                        backgroundColor: mode === 'dark' ? palette.dark.primary.main : palette.light.primary.main,
                        '&:hover': {
                            backgroundColor: mode === 'dark' ? palette.dark.primary.main : palette.light.primary.main,

                        }
                    },
                    containedSecondary: {
                        color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                        backgroundColor: mode === 'dark' ? palette.dark.secondary.main : palette.light.secondary.main,
                        '&:hover': {
                            backgroundColor: mode === 'dark' ? palette.dark.secondary.main : palette.light.secondary.main,

                        }
                    },
                    outlinedPrimary: {
                        color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                        border: '1px solid',
                        borderColor: mode === 'dark' ? palette.dark.primary.main : palette.light.primary.main,
                        '&:hover': {
                            backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                            borderColor: mode === 'dark' ? palette.dark.primary.main : palette.light.primary.main,

                        }
                    },
                    outlinedSecondary: {
                        color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                        border: '1px solid',
                        borderColor: mode === 'dark' ? palette.dark.secondary.main : palette.light.secondary.main,
                        '&:hover': {
                            backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                            borderColor: mode === 'dark' ? palette.dark.secondary.main : palette.light.secondary.main,

                        }
                    },
                    
                    
                     variants:[
                        {
                            props: { variant: 'contained', color: 'primary' },
                            style: {
                                color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                                backgroundColor: mode === 'dark' ? palette.dark.primary.main : palette.light.primary.main,
                                '&:hover': {
                                    backgroundColor: mode === 'dark' ? palette.dark.primary.main : palette.light.primary.main,
                                    borderColor: mode === 'dark' ? palette.dark.primary.main : palette.light.primary.main,
                                    // Reset on touch devices, it doesn't add specificity
                                    '@media (hover: none)': {
                                        backgroundColor: mode === 'dark' ? palette.dark.primary.main : palette.light.primary.main,
                                        borderColor: mode === 'dark' ? palette.dark.primary.main : palette.light.primary.main,
                                    },
                                }
                            }
                        },
                        {
                            props: { variant: 'contained', color: 'secondary' },
                            style: {
                                color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                                backgroundColor: mode === 'dark' ? palette.dark.secondary.main : palette.light.secondary.main,
                                '&:hover': {
                                    backgroundColor: mode === 'dark' ? palette.dark.secondary.main : palette.light.secondary.main,
                                    borderColor: mode === 'dark' ? palette.dark.secondary.main : palette.light.secondary.main,
                                    // Reset on touch devices, it doesn't add specificity
                                    '@media (hover: none)': {
                                        backgroundColor: mode === 'dark' ? palette.dark.secondary.main : palette.light.secondary.main,
                                        borderColor: mode === 'dark' ? palette.dark.secondary.main : palette.light.secondary.main,
                                    },
                                }
                            }
                        },
                        {
                            props: { variant: 'outlined', color: 'primary' },
                            style: {
                                color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                                border: '1px solid',
                                borderColor: mode === 'dark' ? palette.dark.primary.main : palette.light.primary.main,
                                '&:hover': {
                                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                                    borderColor: mode === 'dark' ? palette.dark.primary.main : palette.light.primary.main,
                                    // Reset on touch devices, it doesn't add specificity
                                    '@media (hover: none)': {
                                        backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                                        borderColor: mode === 'dark' ? palette.dark.primary.main : palette.light.primary.main,
                                    },
                                }
                            }
                        },
                        {
                            props: { variant: 'outlined', color: 'secondary' },
                            style: {
                                color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                                border: '1px solid',
                                borderColor: mode === 'dark' ? palette.dark.secondary.main : palette.light.secondary.main,
                                '&:hover': {
                                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                                    borderColor: mode === 'dark' ? palette.dark.secondary.main : palette.light.secondary.main,
                                    // Reset on touch devices, it doesn't add specificity
                                    '@media (hover: none)': {
                                        backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default


                                    },

                                }
                            }
                        }
                    ]








        }
    },
            
         StyledTableCell: {
        styleOverrides: {
            root: {
                backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                '&:hover': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                    
                },
                '&:active': {                    
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:focus': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:disabled': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
            },


    MuiCssBaseline: {
        styleOverrides: {
            body: {
                backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                overflowX: 'hidden',
                overflowY: 'auto',
                height: '100vh',
                width: '100vw',
                margin: 0,
                padding: 0,
                fontFamily: 'Roboto, sans-serif',
                fontSize: '16px',
                lineHeight: '1.5',
                fontWeight: 400,
                textRendering: 'optimizeLegibility',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                boxSizing: 'border-box',
                WebkitTapHighlightColor: 'transparent',
                WebkitOverflowScrolling: 'touch',
                WebkitTextSizeAdjust: '100%',
                WebkitTouchCallout: 'none',
                WebkitFontFeatureSettings: 'liga',
                textRendering: 'optimizeLegibility',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                '&::-webkit-scrollbar': {
                    width: '0.4em',
                    height: '0.4em'
                },
                '&::-webkit-scrollbar-track': {
                    '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                    outline: '1px solid slategrey'
                },
                '&::-webkit-scrollbar-thumb:window-inactive': {
                    backgroundColor: 'rgba(255, 255, 255, 0.4)'
                },
                '&::-webkit-scrollbar-thumb:hover': {
                    backgroundColor: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                },
                '&::-webkit-scrollbar-thumb:active': {
                    backgroundColor: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                },
                '&::-webkit-scrollbar-corner': {
                    backgroundColor: 'transparent'
                },
                '&::-webkit-scrollbar-button': {
                    width: 0,
                    height: 0,
                    display: 'none'
                },
                '&::-webkit-scrollbar-track-piece': {
                    backgroundColor: 'transparent'
                },
                '&::-webkit-scrollbar-res ize': {
                    display: 'none'
                },
                '&::-webkit-scrollbar-track-piece:start': {
                    display: 'none'
                },
                '&::-webkit-scrollbar-track-piece:end': {
                    display: 'none'
                },
                '&::-webkit-scrollbar-track-piece:only-child': {
                    display: 'none'
                },
                '&::-webkit-scrollbar-track-piece:vertical:only-child': {
                    display: 'none'
                },
                '&::-webkit-scrollbar-track-piece:horizontal:only-child': {

                    display: 'none'

                },
                '&::-webkit-scrollbar-track-piece:vertical:first-child': {
                    display: 'none'
                },
                '&::-webkit-scrollbar-track-piece:horizontal:first-child': {
                    display: 'none'
                
                },

            },
        },
    },


    MuiIconButton: {
        styleOverrides: {
            root: {
                color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                '&:hover': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:active': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:focus': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                }
            },
        },
    },


    MuiInputBase: {
        styleOverrides: {
            root: {
                color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                '&:hover': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:active': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:focus': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:disabled': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
            },
        },

    },

    MuiOutlinedInput: {
        styleOverrides: {
            root: {
                '&:hover': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:active': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:focus': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:disabled': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
            },
            notchedOutline: {
                borderColor: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                '&:hover': {
                    borderColor: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:active': {
                    borderColor: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:focus': {
                    borderColor: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:disabled': {
                    borderColor: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
            },
        },
    },


    MuiInputLabel: {
        styleOverrides: {
            root: {
                color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                '&:hover': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:active': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:focus': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:disabled': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
            },
            outlined: {
                '&:hover': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:active': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:focus': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:disabled': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
            },
        },


    },

    MuiAppBar: {
        styleOverrides: {
            root: {
                backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                '&:hover': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:active': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:focus': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:disabled': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
            },
        },
    },

    MuiLink: {
        styleOverrides: {
            root: {
                color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                '&:hover': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:active': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:focus': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:disabled': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
            },
        },

    },
    MuiAccordion: {
        styleOverrides: {
            root: {
                backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                '&:hover': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:active': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:focus': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:disabled': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
            },
        },

    },
    MuiAccordionSummary: {
        styleOverrides: {
            root: {
                backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                '&:hover': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:active': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:focus': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:disabled': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
            },
        },

    },
    MuiAccordionDetails: {
        styleOverrides: {
            root: {
                backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                '&:hover': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:active': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:focus': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:disabled': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
            },

        },

    },
    MuiMenuItem: {
        styleOverrides: {
            root: {
                color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                '&:hover': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:active': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:focus': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:disabled': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
            },
        },
    },

    MuiList : {
        styleOverrides: {
            root: {
                backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                '&:hover': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:active': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:focus': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:disabled': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
            },
        },
    },

    MuiListItemText: {
        styleOverrides: {
            root: {
                backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                '&:hover': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:active': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:focus': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:disabled': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
            },
        },
    },
    MuiListItemIcon: {
        styleOverrides: {
            root: {
                backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                '&:hover': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:active': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:focus': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:disabled': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
            },

        },

    },
    varient: [
        {
            props: { variant: 'contained' },
            style: {
                backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                '&:hover': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:active': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:focus': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:disabled': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
            },
        },
        {
            props: { variant: 'outlined' },
            style: {
                backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                '&:hover': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:active': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:focus': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:disabled': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
            },
        },
        {
            props: { variant: 'text' },
            style: {
                backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,
                '&:hover': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:active': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:focus': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
                '&:disabled': {
                    backgroundColor: mode === 'dark' ? palette.dark.background.default : palette.light.background.default,
                    color: mode === 'dark' ? palette.dark.text.primary : palette.light.text.primary,

                },
            },
        }
        
    ]
        







            


}



    })

    









