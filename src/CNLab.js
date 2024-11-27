import React, { useRef } from 'react';
import { FaCopy } from 'react-icons/fa'; // Font Awesome for the copy icon
import { useLocation, Link } from 'react-router-dom';

// CodeBlock Component
const CodeBlock = ({ code, fileName }) => {
  const preRef = useRef(null);

  const handleCopy = () => {
    const codeLines = Array.from(preRef.current.querySelectorAll('.code-line'));
    const codeText = codeLines.map(line => line.querySelector('span:last-child').innerText).join('\n');

    navigator.clipboard.writeText(codeText).then(() => {
      alert('Code copied to clipboard!');
    });
  };

  const lines = code.split('\n');

  return (
    <div style={{ position: 'relative', marginBottom: '20px' }}>
      {/* File Name and Copy Code Button */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ color: '#ffffff', fontSize: '16px' }}>{fileName}</span>
        <button className="copy-button" onClick={handleCopy}>
          <FaCopy style={{ marginRight: '8px' }} />
          Copy Code
        </button>
      </div>

      <pre ref={preRef} className="code-block">
        {lines.map((line, index) => (
          <div key={index} className="code-line">
            <span className="line-number">{index + 1}</span>
            <span>{line}</span>
          </div>
        ))}
      </pre>
    </div>
  );
};

const CNLab = () => {
  const location = useLocation(); // To check if we are on CN Lab Internal or IoT Lab
  const code6 =
    `#include <stdio.h>
#include <string.h>
int main()
{
  int i = 0, j = 0, n, pos;
  char a[200], b[300], ch;
  printf("\\nenter string");
  scanf("%s", a);
  n = strlen(a);
  printf("enter position to insert a character");
  scanf("%d", &pos);
  if (pos > n)
  {
    printf("\\n invalid position");
    scanf("%d", &pos);
  }
  printf("enter character to be inserted");
  scanf("%c", &ch);
  ch = getchar();
  b[0] = 'd';
  b[1] = 'l';
  b[2] = 'e';
  b[3] = 's';
  b[4] = 't';
  b[5] = 'x';
  j = 6;
  while (i < n)
  {
    if (i == pos - 1)
    {
      b[j] = 'd';
      b[j + 1] = 'l';
      b[j + 2] = 'e';
      b[j + 3] = ch;
      b[j + 4] = 'd';
      b[j + 5] = 'l';
      b[j + 6] = 'e';
      j = j + 7;
    }
    if (a[i] == 'd' && a[i + 1] == 'l' && a[i + 2] == 'e')
    {
      b[j] = 'd';
      b[j + 1] = 'l';
      b[j + 2] = 'e';
      j = j + 3;
    }
    b[j] = a[i];
    i++;
    j++;
  }
  b[j] = 'd';
  b[j + 1] = 'l';
  b[j + 2] = 'e';
  b[j + 3] = 'e';
  b[j + 4] = 't';
  b[j + 5] = 'x';
  b[j + 6] = '\\0';
  printf("\\n after stuffing the frame is");
  printf("\\n %s", b);
  getchar();
  return (0);
}`;

  const code2 =
    `#include<stdio.h>
char data[20], div[20], temp[4], total[100];
int i, j, datalen, divlen, len, flag = 1;
void check();
int main() {
  printf("Enter the total bit of data:");
  scanf("%d", &datalen);
  printf("\\nEnter the total bit of divisor");
  scanf("%d", &divlen);
  len = datalen + divlen - 1;
  printf("\\nEnter the data:");
  scanf("%s", &data);
  printf("\\nEnter the divisor");
  scanf("%s", div);
  for (i = 0; i < datalen; i++) {
    total[i] = data[i];
    temp[i] = data[i];
  }
  for (i = datalen; i < len; i++)
    total[i] = '0';
  check();
  for (i = 0; i < divlen; i++)
    temp[i + datalen] = data[i];
  printf("\\ntransmitted Code Word:%s", temp);
  printf("\\n\\nEnter the received code word:");
  scanf("%s", total);
  check();
  for (i = 0; i < divlen - 1; i++)
    if (data[i] == '1') {
      flag = 0;
      break;
    }
  if (flag == 1)
    printf("\\nsuccessful!!");
  else
    printf("\\nreceived code word contains errors...\\n");
}
void check() {
  for (j = 0; j < divlen; j++)
    data[j] = total[j];
  while (j <= len) {
    if (data[0] == '1')
      for (i = 1; i < divlen; i++)
        data[i] = ((data[i] == div[i]) ? '0' : '1');
    for (i = 0; i < divlen - 1; i++)
      data[i] = data[i + 1];
    data[i] = total[j++];
  }
}`;

  const code3 =
    `#include <stdio.h>
void main()
{
  int path[5][5], i, j, min, a[5][5], p, st = 1, ed = 5, stp, edp, t[5], index;
  printf("Enter the cost matrix\\n");
  for (i = 1; i <= 5; i++)
    for (j = 1; j <= 5; j++)
      scanf("%d", &a[i][j]);
  printf("Enter the paths\\n");
  scanf("%d", &p);
  printf("Enter possible paths\\n");
  for (i = 1; i <= p; i++)
    for (j = 1; j <= 5; j++)
      scanf("%d", &path[i][j]);
  for (i = 1; i <= p; i++)
  {
    t[i] = 0;
    stp = st;
    for (j = 1; j <= 5; j++)
    {
      edp = path[i][j + 1];
      t[i] = t[i] + a[stp][edp];
      if (edp == ed)
        break;
      else
        stp = edp;
    }
  }
  min = t[st];
  index = st;
  for (i = 1; i <= p; i++)
  {
    if (min > t[i])
    {
      min = t[i];
      index = i;
    }
  }
  printf("Minimum cost %d", min);
  printf("\\n Minimum cost path ");
  for (i = 1; i <= 5; i++)
  {
    printf("--> %d", path[index][i]);
    if (path[index][i] == ed)
      break;
  }
}
`;

  const code4 =
    `#include <stdio.h>
#include<string.h>
int main() {
  int i, x;
  char str[100];
  printf("\\nPlease enter a string:\\t");
  scanf("%s", str);
  printf("\\nPlease choose following options:\\n");
  printf("1 = Encrypt the string.\\n");
  printf("2 = Decrypt the string.\\n");
  scanf("%d", &x);
  //using switch case statements
  switch (x) {
  case 1:
    for (i = 0;
      (i < 100 && str[i] != '\\0'); i++)
      str[i] = str[i] + 3; //the key for encryption is 3 that is added to ASCII value.
    printf("\\nEncrypted string: %s\\n", str);
    break;
  case 2:
    for (i = 0;
      (i < 100 && str[i] != '\\0'); i++)
      str[i] = str[i] - 3;
    printf("\\nDecrypted string: %s\\n", str);
    break;
  default:
    printf("\\nError\\n");
  }
  return 0;
}`;

  const code5 =
    `#include<stdio.h>
int main() {
  int incoming, outgoing, buck_size, n, store = 0;
  printf("Enter bucket size, outgoing rate and no of inputs: ");
  scanf("%d %d %d", & buck_size, & outgoing, &n);
  while (n != 0) {
    printf("Enter the incoming packet size : ");
    scanf("%d", &incoming);
    printf("Incoming packet size %d\\n", incoming);
    if (incoming <= (buck_size - store)) {
      store += incoming;
      printf("Bucket buffer size %d out of %d\\n", store, buck_size);
    } else {
      printf("Dropped %d no of packets\\n", incoming - (buck_size - store));
      printf("Bucket buffer size %d out of %d\\n", store, buck_size);
      store = buck_size;
    }
    store = store - outgoing;
    printf("After outgoing %d packets left out of %d in buffer\\n", store, buck_size);
    n--;
  }
}`;

  const code1 =
    `#include<stdio.h>
#include<string.h>
void main() {
  int a[200], b[300], i, j, k, count, n;
  printf("\\nenter frame length");
  scanf("%d", &n);
  printf("\\nenter input in 0s & 1s only");
  for (i = 0; i < n; i++)
    scanf("%d", &a[i]);
  i = 0;
  count = 0;
  j = 0;
  while (i < n) {
    if (a[i] == 1) {
      count = 0;
      b[j] = a[i];
      count++;
      for (k = i + 1;
        (a[k] == 1) && (k < n) && (count < 5); k++) {
        j++;
        b[j] = a[k];
        count++;
        if (count == 5) {
          j++;
          b[j] = 0;
        }
        i = k;
      }
    } else {
      b[j] = a[i];
    }
    i++;
    j++;
  }
  printf("\\n after stuffing the frame");
  for (i = 0; i < j; i++)
    printf("%d", b[i]);
}`;

  const questions = [
    {
      question: "Implement the data ink layer framing methods for bit stuffing",
      code: code1,
      fileName: "bitStuffing.c",
      output: "enter frame length 10\n\nenter input in 0s & 1s only\n1\n1\n1\n0\n1\n1\n1\n0\n1\n0\n\nafter stuffing the frame 1110111010\n"
    },
    {
      question: "Write a program to complete CRC code for the polynomial",
      code: code2,
      fileName: "crcCode.c",
      output: "Enter the total bit of data:4\nEnter the total bit of divisor 4\nEnter the data:1001\nEnter the divisor:1011\ntransmitted Code Word:1001110\nEnter the received code word:1001110\nsuccessful!!\n\n \t\t (Or) \n\nEnter the total bit of data:4\nEnter the total bit of divisor:4\nEnter the data:1001\nEnter the divisor:1011\ntransmitted Code Word:1001110\nEnter the received code word:1000110\nreceived code word contains errors..\n"

    },
    {
      question: "Implement Dijkstra's algorithm to complete shortest path through a network",
      code: code3,
      fileName: "dijkstra.c",
      output: "Enter the cost matrix\n0 1 4 2 0\n1 0 3 7 0\n4 3 0 5 0\n2 7 5 0 6\n0 0 0 6 0\nEnter the paths\n4\nEnter possible paths\n1 2 3 4 5\n1 2 4 5 0\n1 3 4 5 0\n1 4 5 0 0\nMinimum cost 8\nMinimum cost path --> 1--> 4--> 5\n"
    },
    {
      question: "Implement data encryption and data decryption",
      code: code4,
      fileName: "encryptionDecryption.c",
      output: "\nPlease enter a string: cnlab\n\nPlease choose following options:\n1 = Encrypt the string.\n2 = Decrypt the string.\n1\n\nEncrypted string: fqode\n\n\n\nPlease enter a string: fqode\n\nPlease choose following options:\n1 = Encrypt the string.\n2 = Decrypt the string.\n2\n\nDecrypted string: cnlab\n"
    },
    {
      question: "Write a program for congestion control using leaky bucket algorithm",
      code: code5,
      fileName: "leakyBucket.c",
      output: "Enter bucket size, outgoing rate and no of inputs: 10 5 1\nEnter the incoming packet size: 5\nIncoming packet size 5\nBucket buffer size 5 out of 10\nAfter outgoing 0 packets left out of 10 in buffer\n"
    },
    {
      question: "Implement the data ink layer framing methods for character stuffing",
      code: code6,
      fileName: "characterStuffing.c",
      output: "enter string cnlab \nenter position to insert a character 5 \nenter character to be inserted m \n after stuffing the frame is \n dlestxcnladle dlebdleetx"
    }
  ];
  return (
    <div className="cnlab-container">
      <h2 style={{ textAlign: 'center', fontWeight: '500' }}>CN Lab Internal</h2>

      {/* Conditionally render the buttons only when not on CN Lab Internal page */}
      {location.pathname !== '/cn-lab' && (
        <div className="nav-buttons">
          <Link to="/cn-lab">
            <button className="lab-btn">CN Lab Internal</button>
          </Link>
          <Link to="/iot-lab">
            <button className="lab-btn">IoT Lab Internal</button>
          </Link>
        </div>
      )}

      <div className="question-container">
        {questions.map((item, index) => (
          <div key={index}>
            <strong>{index + 1}) {item.question}</strong>
            <div className="container">
              <div className="code-container">
                <CodeBlock code={item.code} fileName={item.fileName} />
              </div>
              <div className="output-container">
                <h3>Output (Example) </h3>
                <pre>{item.output}</pre> {/* Displaying the expected output */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CNLab;
