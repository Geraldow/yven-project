<?php




?>

<h1>Module of Withraw</h1>
<form action="withraw.php" method='POST'>
    <label for="number">Amount</label>
    <input type="number" name="amount" id="amount" required>
    <br><br>
    <label for="currency">Currency</label>
    <select name="currency" id="currency">
        <option value="pen">PEN</option>
        <option value="usd">USD</option>
    </select>
    <input type="submit" value="Make withraw">
</form>