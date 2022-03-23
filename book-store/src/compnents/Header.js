import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material"; 
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import {NavLink} from 'react-router-dom'

const Header = () => {
    const [value, setValue] = useState(); 
  return (
    <div>
        <AppBar sx={{backgroundColor: '#577EAD'}} position="sticky">
            <Toolbar>
                <Typography>
                    <LibraryBooksOutlinedIcon/>
                        </Typography>
                        <Tabs 
                            sx={{ml: 'auto'}}
                        textColor='inherit' 
                        indicatorColor='primary' 
                        value={value} 
                        onChange={(e,val) => setValue(val)}>
                                <Tab linkComponent={NavLink} to='/add' label='Add Product'/>
                                <Tab linkComponent={NavLink} to='/books' label='Books'/>
                                <Tab linkComponent={NavLink} to='/about' label='About Us'/>
                        </Tabs>
            </Toolbar>

        </AppBar>
    </div>
  )
}

export default Header