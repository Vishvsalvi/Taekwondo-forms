import React, { useState } from "react";
// import Register from '../Images/Register.webp'
import { httpClient } from "../common/axios.config";
import { showToast } from "../common/toastify.config";

const RegisterationForm = () => {
  const districtsInMaharashtra = [
    "Ahmednagar",
    "Akola",
    "Amravati",
    "Aurangabad",
    "Beed",
    "Bhandara",
    "Buldhana",
    "Chandrapur",
    "Dhule",
    "Gadchiroli",
    "Gondia",
    "Hingoli",
    "Jalgaon",
    "Jalna",
    "Kolhapur",
    "Latur",
    "Mumbai City",
    "Mumbai Suburban",
    "Nagpur",
    "Nanded",
    "Nandurbar",
    "Nashik",
    "Osmanabad",
    "Palghar",
    "Parbhani",
    "Pune",
    "Raigad",
    "Ratnagiri",
    "Sangli",
    "Satara",
    "Sindhudurg",
    "Solapur",
    "Thane",
    "Wardha",
    "Washim",
    "Yavatmal",
  ];

  const beltColors = [
    "WHITE",
    "YELLOW",
    "GREEN",
    "GREEN-1",
    "BLUE",
    "BLUE-1",
    "RED",
    "RED-1",
    "BLACK",
  ];

  const [gender, setGender] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [event, setEvent] = useState("");

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirstName(value);

    if (!value.trim()) {
      setFirstNameError("First name is required");
    } else {
      setFirstNameError("");
    }
  };

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);

    if (!value.trim()) {
      setLastNameError("Last name is required");
    } else {
      setLastNameError("");
    }
  };

  const [weight, setWeight] = useState("");
  const [weightError, setWeightError] = useState("");

  const handleWeightChange = (event) => {
    const value = event.target.value;
    setWeight(value);

    if (value.trim() === "" || Number(value) < 1) {
      setWeightError("Weight must be a positive number");
    } else {
      setWeightError("");
    }
  };

  const [coachName, setCoachName] = useState("");
  const [coachNameError, setCoachNameError] = useState("");
  const [belt, setBelt] = useState("");
  const [tfiId, setTfiId] = useState("");
  const [wtfCr, setWtfCr] = useState("");

  const events = [
    "KYORUGI",
    "INDIVIDUAL POOMSAE",
    "PAIR POOMSAE",
    "TEAM POOMSAE",
    "FREE STYLE POOMSAE",
  ];

  const handleCoachNameChange = (event) => {
    const value = event.target.value;
    setCoachName(value);

    if (!value.trim()) {
      setCoachNameError("Coach name is required");
    } else {
      setCoachNameError("");
    }
  };

  const [district, setDistrict] = useState("");

  const [dob, setDOB] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const jsonData = {
        event: event || "KYORUGI",
        district: district,
        student_name: `${firstName} ${lastName}`,
        gender: gender,
        dob: dob,
        weight: weight,
        coach_name: coachName,
        current_belt: belt,
        tfi_id_no: tfiId,
        wtf_cr_no: wtfCr,
      };
      const request = await httpClient.post("/", jsonData);
      showToast(request.data.msg, "success");
      document.getElementById("form").reset();
    } catch (error) {
      showToast(error.response.data.msg);
    }
  };

  return (
    <div>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-96 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <div className="absolute inset-0">
              <img
                alt="Register"
                src={
                  "https://images.unsplash.com/photo-1530560643359-6d2fead989b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFla3dvbmRvfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                }
                className="h-full w-full object-cover opacity-80"
              />
            </div>

            <div className="hidden lg:relative lg:block lg:p-12">
              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Register for Kyurogi
              </h2>

              <p className="mt-4 leading-relaxed text-white/90">
                Enter your details correctly to register for the competition.
              </p>
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-24 block lg:hidden">
                <h1 className="mt-0 text-2xl font-bold text-gray-300 sm:text-3xl md:text-4xl">
                  Register for Kyurogi
                </h1>

                <p className="mt-0 leading-relaxed text-gray-200">
                  Kindly enter your details correctly to register for the
                  competition.
                </p>
              </div>

              {/* mAKE A MULTIPART FORM */}
              <form
                encType="multipart/form-data"
                className="mt-8 grid grid-cols-6 gap-6"
                id="form"
              >
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>

                  <input
                    required
                    type="text"
                    id="FirstName"
                    name="first_name"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    className={`p-1 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm ${
                      firstNameError ? "border-red-500" : ""
                    }`}
                  />
                  {firstNameError && (
                    <p className="text-red-500 text-sm mt-1">
                      {firstNameError}
                    </p>
                  )}
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>

                  <input
                    required
                    type="text"
                    id="LastName"
                    name="last_name"
                    value={lastName}
                    onChange={handleLastNameChange}
                    className={`p-1 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm ${
                      lastNameError ? "border-red-500" : ""
                    }`}
                  />
                  {lastNameError && (
                    <p className="text-red-500 text-sm mt-1">{lastNameError}</p>
                  )}
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="dateOfBirth"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date of birth
                  </label>

                  <input
                    required
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    onChange={(e) => {
                      const date = new Date(e.target.value)
                        .toJSON()
                        .slice(0, 10)
                        .split("-")
                        .reverse()
                        .join("/");
                      setDOB(date);
                    }}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <p className="block text-sm font-medium text-gray-700">
                    Choose your Gender
                  </p>
                  <input
                    required
                    type="radio"
                    id="Male"
                    name="gender"
                    value="MALE"
                    onChange={handleGenderChange}
                  />
                  <label className="text-sm text-gray-700" htmlFor="Male">
                    Male
                  </label>
                  <br />
                  <input
                    type="radio"
                    required
                    id="Female"
                    name="gender"
                    value="FEMALE"
                    onChange={handleGenderChange}
                  />
                  <label className="text-sm text-gray-700" htmlFor="Female">
                    Female
                  </label>
                  <br />
                </div>

                {gender === "MALE" && (
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="heightCategory"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Height Category
                    </label>

                    <select
                      required
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                      name="height"
                      id="height"
                    >
                      <option value="Under 148 cms">Under 148 cms</option>
                      <option value="Under 152 cms">Under 152 cms</option>
                      <option value="Under 156 cms">Under 156 cms</option>
                      <option value="Under 160 cms">Under 160 cms</option>
                      <option value="Under 164 cms">Under 164 cms</option>
                      <option value="Under 168 cms">Under 168 cms</option>
                      <option value="Under 172 cms">Under 172 cms</option>
                      <option value="Under 176 cms">Under 176 cms</option>
                      <option value="Over 180 cms">Over 180 cms</option>
                    </select>
                  </div>
                )}

                {gender === "FEMALE" && (
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="heightCategory"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Height Category
                    </label>

                    <select
                      required
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                      name="heights"
                      id="heights"
                    >
                      <option value="Under 144 cms">Under 144 cms</option>
                      <option value="Under 148 cms">Under 148 cms</option>
                      <option value="Under 152 cms">Under 152 cms</option>
                      <option value="Under 156 cms">Under 156 cms</option>
                      <option value="Under 160 cms">Under 160 cms</option>
                      <option value="Under 164 cms">Under 164 cms</option>
                      <option value="Under 168 cms">Under 168 cms</option>
                      <option value="Under 172 cms">Under 172 cms</option>
                      <option value="Under 176 cms">Under 176 cms</option>
                      <option value="Over 176 cms">Over 176 cms</option>
                    </select>
                  </div>
                )}

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="poomsaeType"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Event
                  </label>

                  <select
                    required
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    name="poomsaeType"
                    id="poomsaeType"
                    onChange={(e) => {
                      setEvent(e.target.value);
                    }}
                  >
                    {events.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Weight"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Weight
                  </label>

                  <input
                    required
                    min="1"
                    type="number"
                    id="Weight"
                    name="Weight"
                    value={weight}
                    onChange={handleWeightChange}
                    className={`mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm ${
                      weightError ? "border-red-500" : ""
                    }`}
                  />
                  {weightError && (
                    <p className="text-red-500 text-sm mt-1">{weightError}</p>
                  )}
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="coachName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Coach Name
                  </label>

                  <input
                    required
                    type="text"
                    id="coachName"
                    name="coachName"
                    value={coachName}
                    onChange={handleCoachNameChange}
                    className={`mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm ${
                      coachNameError ? "border-red-500" : ""
                    }`}
                  />
                  {coachNameError && (
                    <p className="text-red-500 text-sm mt-1">
                      {coachNameError}
                    </p>
                  )}
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="district"
                    className="block text-sm font-medium text-gray-700"
                  >
                    District
                  </label>

                  <select
                    required
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    name="district"
                    id="district"
                    onChange={(e) => setDistrict(e.target.value)}
                  >
                    {districtsInMaharashtra.map((district) => (
                      <option key={district} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Make it a dropdown */}
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="beltColor"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Belt Color
                  </label>

                  <select
                    required
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    name="beltColor"
                    id="beltColor"
                    onChange={(e) => {
                      setBelt(e.target.value);
                    }}
                  >
                    {beltColors.map((color) => (
                      <option key={color} value={color}>
                        {color}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="tfId"
                    className="block text-sm font-medium text-gray-700"
                  >
                    TF ID no
                  </label>

                  <input
                    required
                    type="text"
                    id="tfId"
                    name="tfId"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    onChange={(e) => setTfiId(e.target.value)}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="wtfCrNo"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Wtf Cr No
                  </label>

                  <input
                    required
                    type="text"
                    id="wtfCrNo"
                    name="wtfCrNo"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    onChange={(e) => setWtfCr(e.target.value)}
                  />
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="button"
                    onClick={submitForm}
                    className="inline-block shrink-0 rounded-md border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-gray-900 focus:outline-none focus:ring active:text-gray-500"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default RegisterationForm;
