import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import VisibilityIcon from '@material-ui/icons/Visibility';
import WcIcon from '@material-ui/icons/Wc';
import GroupIcon from '@material-ui/icons/Group';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import HomeIcon from '@material-ui/icons/Home';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import { AccordionMenu } from './index';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 320,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    border: 'solid 1px rgba(0, 0, 0, 0.12)',
    borderRadius: 4,
    marginRight: 32,
  },
}));

const Sidebar = () => {
  const classes = useStyles();

  const menus = [
    {
      icon: <WcIcon />,
      text: 'Gender',
      field: 'gender',
      keywords: ['Male', 'Female'],
    },
    {
      icon: <VisibilityIcon />,
      text: 'Eye color',
      field: 'eye_color',
      keywords: [
        'yellow',
        'blue',
        'green',
        'brown',
        'red',
        'violet',
        'white',
        'purple',
        'black',
        'grey',
        'silver',
        'gold',
        'hazel',
        'indigo',
        'amber',
        'bown',
      ],
    },
    {
      icon: <GroupIcon />,
      text: 'Race',
      field: 'race',
      keywords: [
        'Alien',
        'Alpha',
        'Amazon',
        'Android',
        'Animal',
        'Asgardian',
        'Atlantean',
        'Bizarro',
        'Bolovaxian',
        'Clone',
        'Cosmic Entity',
        'Cyborg',
        'Czarnian',
        'Dathomirian Zabrak',
        'Demon',
        'Eternal',
        'Flora Colossus',
        'Frost Giant',
        'God',
        'Gorilla',
        'Gungan',
        'Human',
        'HumanKree',
        'HumanSpattoi',
        'HumanVulcan',
        'HumanVuldarian',
        'Icthyo Sapien',
        'inhuman',
        'Kaiju',
        'Kakarantharaian',
        'Korugaran',
        'Kryptonian',
        'Luphomoid',
        'Maiar',
        'Martian',
        'Metahuman',
        'Mutant',
        'New Got',
        'Neyaphem',
        'Parademon',
        'Planet',
        'Rodian',
        'Saiyan',
        'Spartoi',
        'Strontian',
        'Symbiote',
        'Talokite',
        'Tamaranean',
        'Vampire',
        'Xenomorph XX121',
        'Yautja',
        "Yoda's species",
        'ZenWhoberian',
        'Zombie',
      ],
    },
    {
      icon: <InvertColorsIcon />,
      text: 'Hair Color',
      field: 'hair_color',
      keywords: [
        'No hair',
        'Black',
        'Blond',
        'Brown',
        'White',
        'Purple',
        'Orange',
        'Pink',
        'Red',
        'Auburn',
        'trawberry Blond',
        'Blue',
        'Green',
        'Magenta',
        'Silver',
        'Grey',
        'Yellow',
        'Gold',
        'Indigo',
      ],
    },
    {
      icon: <HomeIcon />,
      text: 'Publisher',
      field: 'publisher',
      keywords: [
        'Marvel Comics',
        'Dark Horse Comics',
        'DC Comics',
        'NBC Heroes',
        'Wildstorm',
        'Image Comics',
        'Icon Comics',
        'SyFy',
        'HannaBarbera',
        'George Lucas',
        'Team Epic TV',
        'South Park',
        'HarperCollins',
        'ABC Studios',
        'Universal Studios',
        'IDW Publishing',
        'Shueisha',
        'Sony Pictures',
        'J. K. Rowling',
        'Titan Books',
        'Rebellion',
        'Microsoft',
        'J. R. R. Tolkien',
      ],
    },
    {
      icon: <AccessibilityIcon />,
      text: 'Skin color',
      field: 'skin_color',
      keywords: [
        'blue',
        'red',
        'black',
        'grey',
        'gold',
        'green',
        'white',
        'pink',
        'silver',
        'yellow',
        'purple',
        'Orange',
        'gray',
        'bluewhite',
      ],
    },
    {
      icon: <TagFacesIcon />,
      text: 'Alignment',
      field: 'alignment',
      keywords: ['good', 'bad', 'neutral'],
    },
  ];

  return (
    <div>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={(
          <ListSubheader component="div" id="nested-list-subheader">
            絞り込み条件
          </ListSubheader>
        )}
        className={classes.root}
      >
        {menus.map(({
          icon, text, field, keywords,
        }) => (
          <AccordionMenu
            icon={icon}
            text={text}
            field={field}
            keywords={keywords}
            key={text}
          />
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
