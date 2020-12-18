import React from 'react'
import './toparticles.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img from '../../img/hiw.png'
const Toparticles = () => {
    return (
        <div className="toparticle">
             <div className='ta-top'>
            <div className="ta-topheading">Top Articles</div>
            <div className="ta-toptag">Have A Look

</div>
        </div>
        <div className="ta-body">
        <Card >
        <div  className="tag">conggf</div>
      <CardActionArea>
      <img src={img} alt=""  />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
          Redfin Ranks the Most Competitive Neighborhoods of 2020
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Eazinow
        </Button>
        <Button size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
    <Card >
      <CardActionArea>
      <img src={img} alt=""/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Redfin Ranks the Most Competitive Neighborhoods of 2020
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Eazinow
        </Button>
        <Button size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
    <Card >
      <CardActionArea>
        <img src={img} alt=""/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Redfin Ranks the Most Competitive Neighborhoods of 2020
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Eazinow
        </Button>
        <Button size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
        </div>
        </div>
    )
}

export default Toparticles
