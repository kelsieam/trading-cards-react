'use strict';

function Homepage() {
  return <div><p>This is a great site for viewing trading cards.</p>
              <a href="/cards">Click here to view the trading cards</a>
              <img src="/static/img/balloonicorn.jpg" /></div>;
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
