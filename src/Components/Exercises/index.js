import React, { Fragment } from "react"
import { Grid, Paper, Typography, List, ListItem, ListItemText } from "@material-ui/core"

const style = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
}

export default ({ exercises, category }) => (

  <Grid container>
    <Grid item sm>
      <Paper style={style.Paper}>
        {exercises.map(([group, subgroup]) =>
          !category || category === group
            ? <Fragment>
              <Typography
                variant="h5"
                style={{ textTransform: 'capitalize' }}>
                {group}
              </Typography>
              <List component="ul">
                {subgroup.map(({ title }) =>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                )}
              </List>
            </Fragment>
            : null

        )}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={style.Paper}>
        Right Grid
      </Paper>
    </Grid>
  </Grid>
)
