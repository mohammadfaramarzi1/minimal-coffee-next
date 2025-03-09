import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { toast } from "sonner";

function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    person: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const bookHandler = async (event) => {
    event.preventDefault();
    if (
      !form.name.length ||
      !form.email.length ||
      !form.date.length ||
      !form.time.length ||
      !form.person
    ) {
      return toast.error("All the fields are required!!");
    }
    const res = await fetch("http://localhost:4000/reserve", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        date: form.date,
        time: form.time,
        person: form.person,
      }),
    });

    if (res.status === 201) {
      setForm({ name: "", email: "", date: "", time: "", person: "" });
      return toast.success("Booked a table successfully!");
    }
  };

  return (
    <div className="container-fluid my-5">
      <div className="container">
        <div className="reservation position-relative overlay-top overlay-bottom">
          <div className="row align-items-center">
            <div className="col-lg-6 my-5 my-lg-0">
              <div className="p-5">
                <div className="mb-4">
                  <h1 className="display-3 text-primary">30% OFF</h1>
                  <h1 className="text-white">For Online Reservation</h1>
                </div>
                <p className="text-white">
                  Lorem justo clita erat lorem labore ea, justo dolor lorem
                  ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo
                  sed sed diam. Ea et erat ut sed diam sea
                </p>
                <ul className="list-inline text-white m-0">
                  <li className="py-2">
                    <FontAwesomeIcon icon={faCheck} />
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="py-2">
                    <FontAwesomeIcon icon={faCheck} />
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="py-2">
                    <FontAwesomeIcon icon={faCheck} />
                    Lorem ipsum dolor sit amet
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="text-center p-5"
                style={{ background: "rgba(51, 33, 29, 0.8)" }}
              >
                <h1 className="text-white mb-4 mt-5">Book Your Table</h1>
                <form className="mb-5">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control bg-transparent border-primary p-4"
                      placeholder="Name"
                      required="required"
                      name="name"
                      value={form.name}
                      onChange={(event) => changeHandler(event)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control bg-transparent border-primary p-4"
                      placeholder="Email"
                      required="required"
                      name="email"
                      value={form.email}
                      onChange={(event) => changeHandler(event)}
                    />
                  </div>
                  <div className="form-group">
                    <div className="date" id="date" data-target-input="nearest">
                      <input
                        type="text"
                        className="form-control bg-transparent border-primary p-4 datetimepicker-input"
                        placeholder="Date"
                        data-target="#date"
                        data-toggle="datetimepicker"
                        name="date"
                        value={form.date}
                        onChange={(event) => changeHandler(event)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="time" id="time" data-target-input="nearest">
                      <input
                        type="text"
                        className="form-control bg-transparent border-primary p-4 datetimepicker-input"
                        placeholder="Time"
                        data-target="#time"
                        data-toggle="datetimepicker"
                        name="time"
                        value={form.time}
                        onChange={(event) => changeHandler(event)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <select
                      className="custom-select bg-transparent border-primary px-4"
                      style={{ height: "49px" }}
                      name="person"
                      value={form.person}
                      onChange={(event) => changeHandler(event)}
                    >
                      <option selected>Person</option>
                      <option value="1">Person 1</option>
                      <option value="2">Person 2</option>
                      <option value="3">Person 3</option>
                      <option value="3">Person 4</option>
                    </select>
                  </div>

                  <div>
                    <button
                      className="btn btn-primary btn-block font-weight-bold py-3"
                      type="submit"
                      onClick={bookHandler}
                    >
                      Book Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
