
function Settings() {
  return (
    <div>
      <h2>Settings</h2>
      <hr />
      <h4>TIME (MINUTES)</h4>
      <div>
        <label htmlFor="">
            <input type="number" />
        </label>
        <label htmlFor="">
            <input type="number" />
        </label>
        <label htmlFor="">
            <input type="number" />
        </label>
      </div>
      <hr />
      <div>
        <h4>FONT</h4>
        <div>
            <button>Aa</button>
            <button>Aa</button>
            <button>Aa</button>
        </div>
      </div>
      <hr />
      <div>
      <h4>COLOR</h4>
        <div>
            <input type="checkbox" name="" id="" />
            <input type="checkbox" name="" id="" />
            <input type="checkbox" name="" id="" />
        </div>
      </div>
      <button>Apply</button>
    </div>
  )
}

export default Settings
