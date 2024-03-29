import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios.get('/api/book')
      .then(res => {
        this.setState({ books: res.data });
        console.log(this.state.books);
      });
  }

  render() {
    return (
      <body>
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Book Details
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Book</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Book No.</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Publish Year</th>
                </tr>
              </thead>
              <tbody>
                {this.state.books.map(book =>
                  <tr>
                    <td><Link to={`/show/${book._id}`}>{book.isbn}</Link></td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.published_year}</td>

                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </body>
    );
  }
}

export default App;
