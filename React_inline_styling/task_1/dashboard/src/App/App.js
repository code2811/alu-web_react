import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  app: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  body: {
    flex: 1,
    padding: '40px 20px',
  },
});

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className={`App ${css(styles.app)}`}>
          <Header />
          <div className={css(styles.body)}>
            {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
