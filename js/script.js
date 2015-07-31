	var $dataItem = '';
	$(document).ready(function(){
		$('#input').keyup(function(){
			$('#bank').empty();
			$('#loan').empty();
			$('#investment').empty();
			$('#mortgage').empty();
			$('#credit-card').empty();
			var $input = $('#input').val();
			$input = $input.toLocaleLowerCase();
			if($input){
				$.getJSON('products.json',function(products){
			        $.each(products, function(index, product){
			        	$.each(product, function(index, item){
			        		$dataItem = (item.name).toLocaleLowerCase();
			        		var regexPattern = new RegExp("\\b" + $input + "\\b", "g");
			        		if ($dataItem.match(regexPattern)){
			        			if (item.type == 'BANK'){
	         						$('#bank').append('<li class="bankName">' + item.name + ' </li>');
	         						$('#bank').append('<li class="url"><a href="' + item.url + '"</a>' + item.url + '</li>');
			        			};
			        			if(item.type == 'LOAN'){
	         						$('#loan').append('<li class="bankName">' + item.name + ' </li>');
	         						$('#loan').append('<li class="url"><a href="' + item.url + '"</a>' + item.url + '</li>');
			        			};
			        			if(item.type == 'INVESTMENT'){
	         						$('#investment').append('<li class="bankName">' + item.name + ' </li>');
	         						$('#investment').append('<li class="url"> <a href="' + item.url + '"</a>' + item.url + '</li>');
			        			};

			        			if(item.type == 'MORTGAGE'){
	         						$('#mortgage').append('<li class="bankName">' + item.name + ' </li>');
	         						$('#mortgage').append('<li class="url"><a href="' + item.url + '"</a>' + item.url + '</li>');
			        			};
			        			if(item.type == 'CREDIT_CARD'){
	         						$('#credit-card').append('<li class="bankName">' + item.name + ' </li>');
	         						$('#credit-card').append('<li class="url"><a href="' + item.url + '"</a>' + item.url + '</li>');
			        			};
			        		};
			        	});
			        });
				});
			};
		});
	});
 