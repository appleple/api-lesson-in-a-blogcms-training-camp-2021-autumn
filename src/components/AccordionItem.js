import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { useConditions } from '../store';

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
  isFillterd: {
    background: '#f0f0f0',
  },
}));

const AccordionItem = ({ field, keyword }) => {
  const classes = useStyles();
  const { conditions, setConditions } = useConditions();

  const [filtered, setFiltered] = useState(false);

  const handleClick = () => {
    const keywords = conditions[field] ? conditions[field].keywords : [];

    if (!filtered) {
      const added = { [field]: { field, keywords: [...keywords, keyword] } };
      setConditions({ ...conditions, ...added });
    } else if (conditions[field].keywords.length === 1) {
      const { [field]: _, ...rest } = conditions;
      // delete conditions[field];
      setConditions(rest);
    } else {
      const deleted = {
        [field]: { field, keywords: keywords.filter((k) => k !== keyword) },
      };
      setConditions({ ...conditions, ...deleted });
    }
    setFiltered(!filtered);
  };

  return (
    <ListItem
      button
      className={`${classes.nested} ${filtered ? classes.isFillterd : ''}`}
      onClick={handleClick}
    >
      <ListItemText primary={keyword} />
    </ListItem>
  );
};

export default AccordionItem;
