import "./PersonalInfo.css";

function PersonalInfoForm({ personalInfo, setPersonalInfo }) {
  return (
    <>
      <form>
        <label htmlFor="name">Full Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={personalInfo.fullName}
          placeholder="Kondwani Muwowo"
          onChange={(event) =>
            setPersonalInfo({ ...personalInfo, fullName: event.target.value })
          }
        />
        <br />

        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={personalInfo.email}
          placeholder="kondwanimuwowo@gmail.com"
          onChange={(event) =>
            setPersonalInfo({ ...personalInfo, email: event.target.value })
          }
        />
        <br />

        <label htmlFor="phone">Phone: </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={personalInfo.phone}
          placeholder="+260 976 999 510"
          onChange={(event) =>
            setPersonalInfo({ ...personalInfo, phone: event.target.value })
          }
        />
        <br />

        <label htmlFor="linkedIn">LinkedIn: </label>
        <input
          type="url"
          name="linkedIn"
          id="linkedIn"
          value={personalInfo.linkedin}
          placeholder="www.linkedin.com/in/kondwanimuwowo"
          onChange={(event) =>
            setPersonalInfo({ ...personalInfo, linkedIn: event.target.value })
          }
        />
        <br />

        <label htmlFor="portfolio">Portfolio: </label>
        <input
          type="url"
          name="portfolio"
          id="portfolio"
          value={personalInfo.portfolio}
          placeholder="www.kondwanimuwowo.com"
          onChange={(event) =>
            setPersonalInfo({ ...personalInfo, portfolio: event.target.value })
          }
        />
        <br />

        <label htmlFor="city">City: </label>
        <input
          type="text"
          name="city"
          id="city"
          value={personalInfo.city}
          autoComplete="address-level2"
          placeholder="e.g., Lusaka"
          onChange={(event) =>
            setPersonalInfo({ ...personalInfo, city: event.target.value })
          }
        />
        <br />

        <label htmlFor="country">Country: </label>
        <input
          type="text"
          name="country"
          id="country"
          value={personalInfo.country}
          autoComplete="country-name"
          placeholder="e.g., Zambia"
          onChange={(event) =>
            setPersonalInfo({ ...personalInfo, country: event.target.value })
          }
        />
        <br />
        {console.log(personalInfo)}
      </form>
    </>
  );
}

export default PersonalInfoForm;
