<script>
    let fields = {
        email:""
    }
    let errors = {
        email:""
    }
    let valid = false;

    function isEmailValid( value ) {
        return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test( value )
    }

    function submitForm(e) {
        valid = true;

        if(!isEmailValid(fields.email)) {
            valid = false;
            errors.email = "You must enter a valid email!";
        }else {
            errors.email = "";
        }

        console.log(valid? fields: errors);
    }
</script>

<h1>View 2</h1>
<form on:submit|preventDefault={submitForm}>
    <label for="email"><strong>Enter your email:</strong></label>
    <input type=text id="email" name="email" bind:value="{fields.email}" autofocus/>
    <input type="submit" value="enter"/>
    <p><em>{errors.email}</em></p>
</form>

<style>
    label{ display: inline;}
    p{
        color: red;
    }
</style>