#!/bin/bash

echo "🔍 Testando deploy no servidor remoto..."
echo "=================================="

# Teste de conectividade básica
echo "1. Testando conectividade com o servidor..."
if nc -zv 201.23.3.86 22 2>/dev/null; then
    echo "✅ Servidor acessível via SSH"
else
    echo "❌ Servidor não acessível"
    exit 1
fi

# Teste da porta da aplicação
echo "2. Testando porta 8182..."
if nc -zv 201.23.3.86 8182 2>/dev/null; then
    echo "✅ Porta 8182 está aberta"
else
    echo "❌ Porta 8182 não está acessível"
    echo "   Aguarde alguns minutos para o deploy terminar..."
    exit 1
fi

# Teste da API
echo "3. Testando API..."
if curl -s -f http://201.23.3.86:8182/tarefas >/dev/null; then
    echo "✅ API está respondendo"
    echo "📋 Testando endpoint de tarefas:"
    curl -s http://201.23.3.86:8182/tarefas | head -3
else
    echo "❌ API não está respondendo"
    exit 1
fi

# Teste da interface web
echo "4. Testando interface web..."
if curl -s -f http://201.23.3.86:8182/ >/dev/null; then
    echo "✅ Interface web está acessível"
    echo "🌐 Acesse: http://201.23.3.86:8182"
else
    echo "❌ Interface web não está acessível"
    exit 1
fi

echo "=================================="
echo "🎉 Deploy funcionando perfeitamente!"
echo "🌐 Acesse sua aplicação em: http://201.23.3.86:8182" 