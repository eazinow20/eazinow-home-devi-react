import React, { useState } from 'react'
import Header from '../Header'
import { Dropdown, FormInput, Input } from 'semantic-ui-react'
import { MoreVert, Share } from '@material-ui/icons'
import './inspiration.css'
import img from '../../img/slide2.jpg'
import img1 from '../../img/ft2.jpg'
import img3 from '../../img/bg1.jpeg'
import img2 from '../../img/hiw.png'
// import Footer from './../footer/index.js'
import Pagination from '@material-ui/lab/Pagination';
import { Modal } from 'semantic-ui-react'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Checkbox, FormControlLabel, IconButton } from '@material-ui/core'

import Footer from '../footer'
import InspImage from './InspImage'

const Inspiration = () => {
    const [proptypevalue, setproptypevalue] = useState(" ")
    const [modelimg, setmodelimg] = useState("");
  

    const [openmodel, setopenmodel] = useState(false)

    const [openadvance, setopenadvance] = useState(false)


    const handleclosemodel = () => {
        setopenmodel(false)
    }
    const handlepopper = (e) => {
        setopenadvance(true);


    }
    const hideadvance = (e) => {
        setopenadvance(false);


    }
    const proptypeoptions = [
        { key: 1, text: 'Bedroom', value: 1 },
        { key: 2, text: 'Drawing Room', value: 2 },
        { key: 3, text: 'Washroom/Toilet', value: 3 },
        { key: 4, text: 'Study Room', value: 4 },
        { key: 5, text: 'kitchen ', value: 5 },
        { key: 6, text: 'Balcony', value: 6 },
        { key: 7, text: 'Mandir', value: 7 },
        { key: 8, text: 'Home office', value: 8 },
        { key: 9, text: 'Home Theater', value: 9 },
        { key: 10, text: 'Home Bar', value: 10 },
    ]



    const handleChangeprop = (event) => {
        setproptypevalue(event.target.value)
    };

    return (
        <>

            <Header listing background="white" color="gray" border="1px solid lightgray" />
            <div className="inspiration">
                <div className="inspi_top">
                    <div className="inspi_tophead">
                        Results For :
                </div>
                    <div className="inspi_topbody">
                      
                            <li>
                                <Input fluid size="large" type="text" placeholder='What are You Looking For ...' />
                            </li>
                            <li>
                                <Dropdown 
                                    onChange={handleChangeprop}
                                    openOnFocus
                                    options={proptypeoptions}
                                    placeholder='All Category'
                                    selection
                                    value={proptypevalue}
                                />
                            </li>



                            <li>
                                <div onClick={handlepopper} className='advance'>Advance<MoreVert />
                                </div>

                            </li>
                            <li>
                                <button class='btn'>Submit</button>
                            </li>
                    
                    </div>
                    {openadvance ?
                        <div className="advance popper">
                            <div className="popper-body ">
                                <ul>
                                    <li><FormControlLabel control={<Checkbox name="checkedA" />} label="Ceiling/ false ceiling" /></li>
                                    <li><FormControlLabel control={<Checkbox name="checkedA" />} label="Flooring" /></li>
                                    <li><FormControlLabel control={<Checkbox name="checkedA" />} label="Wall finish" /></li>
                                    <li><FormControlLabel control={<Checkbox name="checkedA" />} label="Bed" /></li>
                                    <li><FormControlLabel control={<Checkbox name="checkedA" />} label="Sofa" /></li>
                                    <li><FormControlLabel control={<Checkbox name="checkedA" />} label="Electrical fixtures" /></li>
                                    <li><FormControlLabel control={<Checkbox name="checkedA" />} label="Bathroom fixtures" /></li>
                                    <li><FormControlLabel control={<Checkbox name="checkedA" />} label="Wardrobes" /></li>

                                </ul>
                                <li onClick={hideadvance} >Hide</li>

                            </div>
                        </div> : ""}

                </div>
                <div className="inspi_body">
                    <div className="inspi_box1">
                        <InspImage img={img} />
                        <InspImage img={img1} />


                    </div>
                    <div className="inspi_box1">
                        <InspImage img={img1} />
                        <InspImage img={img2} />
                    </div>
                    <div className="inspi_box1">
                        <InspImage img={img} />
                        <InspImage img={img1} />
                    </div>
                    <div className="inspi_box1">
                        <InspImage img={img3} />
                        <InspImage img={img} />
                    </div>


                    {/* {/* {exploreimgdata.map((data) => {
                        return (
                            <div onClick={() => handleopenmodel(data.imgsrc)} className="img_box">
                                <img src={data.imgsrc} alt="Avatar" class="image" style={{ width: '100%' }} /><center>{data.name}</center>
                                <div className="img_overlay">



                                    <Dropdown
                                        className="overlay_slt"
                                        closeOnBlur={false}
                                        closeOnChange={false}
                                        noResultsMessage='Try another search.'

                                        text={catvalue}>
                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => setcatvalue("Banking")} text='Banking' description='interior' />
                                            <Dropdown.Item onClick={() => setcatvalue("Design")} text='Design' description='creative' />
                                            <Dropdown.Item onClick={() => setcatvalue("Banking")} text='Banking' description='interior' />
                                            <Dropdown.Item onClick={() => setcatvalue("Design")} text='Design' description='creative' />
                                            <Dropdown.Item onClick={() => setcatvalue("Banking")} text='Banking' description='interior' />
                                            <Dropdown.Item onClick={() => setcatvalue("Design")} text='Design' description='creative' />



                                            <Dropdown.Divider />
                                            <Dropdown.Item icon='add' text='Add New' />

                                            <Dropdown.Item><FormInput onChange={(e) => setcatvalue(e.target.value)} placeholder="Enter New.." size='mini' /></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <div className="overlay">Save</div>

                                </div>
                            </div>) */}
                    {/* })} */}


                </div>
                <div className="pagination">
                    <Pagination count={10} color="secondary" />
                </div>
                <Modal
                    dimmer='blurring'
                    className="model"
                    open={openmodel}
                    size='small'
                    onClose={handleclosemodel}
                >
                    <div className="model_btn">
                        <div>
                            <IconButton><SwapHorizIcon /></IconButton>
                            <IconButton>    <FavoriteBorderIcon /></IconButton>

                            <IconButton>  <Share /></IconButton>
                        </div>
                        <div className='model_savebtn'>
                            <Dropdown
                                className="overlay_slt"
                                closeOnBlur={false}
                                closeOnChange={false}
                                search
                                closeOnEscape={true}
                                text='Category'>
                                <Dropdown.Menu>
                                    <Dropdown.Item text='New' />
                                    <Dropdown.Item text='Open...' description='ctrl + o' />
                                    <Dropdown.Item text='Save as...' description='ctrl + s' />
                                    <Dropdown.Item text='Rename' description='ctrl + r' />


                                    <Dropdown.Divider />
                                    <Dropdown.Item icon='add' text='Add New' />

                                    <Dropdown.Item><FormInput size='mini' /></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <div className="overlay">Save</div>
                        </div>
                    </div>
                    <img src={modelimg} alt="" />

                </Modal>
            </div>
            <Footer />
        </>
    )
}

export default Inspiration
