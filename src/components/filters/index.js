import React from "react";
import "./index.css"

function Filters() {
    return (
        <div class="og-row" id="og-filters">
            <select className="" id="education" placeholder="Education">
                <option value="" selected="">Education</option>
                <option value="Engineering">Engineering</option>
                <option value="Non-Engineering">Non-Engineering</option>
            </select>
            <select className="" id="experience" placeholder="Experience">
                <option value="" selected="">Experience</option>
                <option value="Experienced">Experienced</option>
                <option value="Fresher">Fresher</option>
            </select>
            <select className="" id="availability" placeholder="Availability">
                <option value="" selected="">Availability</option>
                <option value="ready_to_hire">Ready to hire</option>
                <option value="graduating_in_shortly">Graduating in shortly</option>
            </select>
            <select name="state" id="location" className="form-control">
                <option value="">Location</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
            </select>
            <select id="Show Pages" defaultValue={'DEFAULT'}>
                    <option value="DEFAULT"disabled >Show Page</option>
                    <option value="number">10</option>
                    <option value="number">20</option>
                    <option value="number">50</option>
             </select>
        </div>
    )
}

export default Filters;