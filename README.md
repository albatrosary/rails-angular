# Rails and Angular with WebPacker

## Install

Step 1. Create WebPacker Template:

```
rails new --webpack=angular rails-angular
cd rails-angular
./bin/rails s
open http://localhost:3000/
```

Step 2. Add Controller

```
bundle exec rails g controller pages index
open http://localhost:3000/pages/index
```

Step 3. Change `app/views/pages/index.html.erb`

```
<h1>Pages#index</h1>
<p>Find me in app/views/pages/index.html.erb</p>

<hello-angular>Loading...</hello-angular>
<%= javascript_pack_tag 'hello_angular' %>
```

Step 4. Reload Browser
