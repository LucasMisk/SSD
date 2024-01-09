import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqData: any[] = [
    {
      question: 'What is the purpose of this website?',
      answer: 'This website is designed to showcase products and provide information about PC components.'
    },
    {
      question: 'How can I purchase a product?',
      answer: 'To purchase a product, click on the "Buy Now" button and follow the instructions on the checkout page.'
    },
    {
      question: 'Are there discounts for bulk orders?',
      answer: 'Yes, we offer discounts for bulk orders. Contact our customer support for more information.'
    },
    {
      question: 'Can I cancel my order after placing it?',
      answer: 'Cancellation requests can be made within 24 hours of placing the order. Please contact customer support.'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept credit/debit cards, PayPal, and other secure payment methods. Check our payment options at the checkout.'
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order is shipped, you will receive a tracking number via email. Use this number to track your order on our website.'
    },
  ];

  constructor() {}

  ngOnInit() {}
}
