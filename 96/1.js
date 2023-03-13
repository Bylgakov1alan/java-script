let num = prompt('введите один из языков: ru, en, de');

switch (num) {
	case 'ru':
		console.log('русский');
	break;
	case 'en':
		console.log('английский');
	break;
	case 'de':
		console.log('немецкий');
	break;
	default:
		console.log('нет такого языка');
	break;
}