import React, { Component } from 'react';
import { format, addDays, add, startOfMonth, startOfWeek } from 'date-fns';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDay: new Date(),
    };
  }

  addDay = () => {
    this.setState({
      // currentDay: addDays(this.state.currentDay, 1),
      currentDay: add(this.state.currentDay, { days: 1 }),
    });
  };

  render() {
    const { currentDay } = this.state;
    return (
      <div>
        {format(currentDay, 'd MMMM--y')}
        <button onClick={this.addDay}>Add day</button>
      </div>
    );
  }
}

const Month = (props) => {
  const firstDayOfMounth = startOfMonth(props.day);
  const firstDayOfFirstWeek = startOfWeek(firstDayOfMounth);

  const weeks = [];

  for (let i = 0; i < 6; i++) {
    const Week = <Week startingDay={addDays(firstDayOfFirstWeek, i * 7)} />;

    weeks.push(Week);
  }

  return <div>{weeks}</div>;
};

export default Calendar;
