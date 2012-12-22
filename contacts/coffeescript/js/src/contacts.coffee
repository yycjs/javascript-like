require ['jquery', 'contactModel', 'mustache'], ($, Contact, Mustache) ->
	contactTypes = [
		"Family"
		"Friends"
		"Co-workers"
	]
	
	contactList = [
		new Contact "William", contactTypes[2], "1200 9th Ave", "34234534654", "william@husker.com"
		new Contact "Laura", contactTypes[1], "1200 9th Ave", "67898458", "laura@starbuck.com"
		new Contact "Lee", contactTypes[0], "1200 9th Ave", "3456789", "lee@apollo.com"
	]

	template = """
	{{#contactList}}
	<li class="contact span8">
          <a href="javascript://" class="remove"><i class="icon-remove"></i></a>
          <form>
            <div class="row">
              <div class="span2">
                <img src="img/contact.png" width="100" height="100">
              </div>
              <div class="span3">
                <input type="text" name="name" placeholder="Add Name" value={{name}}>
                <select name="category">
		  {{#contactTypes}}
		  <option value="{{.}}">
		  	  {{.}}
		  </option>
		  {{/contactTypes}}
                </select>
              </div>
              <div class="span3">
                <label>Address</label>
                <input type="text" name="address" value="{{address}}">
                <label>Phone</label>
                <input type="text" name="phone" value="{{phoneNumber}}">
                <label>Email</label>
                <input type="text" name="email" value="{{email}}">
              </div>
            </div>
          </form>
        </li>
	{{/contactList}}
	"""

	renderedContactList = 
		Mustache.render template, 
			contactList: contactList
			contactTypes: contactTypes

	$("#contacts>ul").html renderedContactList
	