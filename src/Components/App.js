import React, { Fragment, Component } from 'react'
import { Header, Footer } from './Layout'
import Exercises from './Exercises'
import { muscles, exercises } from './store'

export default class extends Component {

  state = {
    exercises,
    //  category: 'chest'
  }

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise]
        return exercises
      }, {})
    )
  }

  categorySelected = category => {
    this.setState({
      category
    })
  }

  render() {

    const exercises = this.getExercisesByMuscles(),
      { category } = this.state

    console.log(exercises)
    return <Fragment>

      <Header />
      <Exercises
        exercises={exercises}
        category={category}
      />
      <Footer
        muscles={muscles}
        category={category}
        onSelect={this.categorySelected}
      />

    </Fragment>
  }
}