import React from "react";
//manejo de estados generar información y consumirla internamente
class BadgeFrom extends React.Component {
   //inicializamos el estado como objeto vacio para poder leer
   state = {
       jobTitle: 'Designer',
   };

  //metodos de manejo de eventos del formulalrio
  handleChange = e => {
    /* //para visualizar el valor del evento que queremos trabajar
        console.log({
            name: e.target.name,
            value: e.target.value,
        });// si quermos el valor de los eventos en cosla  */

    //funcion de la clase component para guardar la informalcion del handleChange
    this.setState({
      //se le pasa objeto conla informacion que se quiere guardar
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    console.log("Button was clicked");
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Form was submitted");
    console.log(this.state); //imprimir todo el formulario
  };

  render() {
    return (
      <div>
        <h1>New Attendeant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Primer Nombre</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.state.firstName}//para leer el estado usamos this.state. Y con setState guardamos infpo del estado
            />
          </div>
          <div className="form-group">
            <label>Segundo Nombre</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.state.lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="email"
              name="email"
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <label>Titulo de trabajo</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.state.jobTitle}
            />
          </div>
          <div className="form-group">
            <label>Twiter</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="twiter"
              value={this.state.twiter}
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeFrom;
